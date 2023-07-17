import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./styles";
import { Card } from "primereact/card";
import { Heading } from "../../../design-system/Heading/Heading";
import { Episode } from "../entities/episode";
import { ButtonSolid } from "../../../design-system/Button/styles";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import { RadioButton } from "primereact/radiobutton";
import { Rating } from "primereact/rating";

const GET_ALL_EPISODES = gql`
  query GetAllEpisodes {
    episodes {
      results {
        id
        episode
        name
        air_date
        characters {
          id
          name
          image
          species
          status
        }
      }
    }
  }
`;

function EpisodeList() {
  const { id } = useParams<string>();
  const { loading, error } = useQuery(GET_ALL_EPISODES, {
    variables: { id },
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [episodes, setEpisodes] = useState([]);
  const [view, setView] = useState("");
  const [value, setValue] = useState<any>({});

  const handleSearch = async () => {
    try {
      const query = `
        query {
          episodes(filter: { name: "${searchTerm}" }) {
            results {
              id
              name
              episode
              air_date
              characters {
                id
                name
                image
                species
                status
              }
            }
            
          }
        }
      `;
      const response = await axios.post("https://rickandmortyapi.com/graphql", {
        query,
      });

      setEpisodes(response.data.data.episodes.results);
    } catch (error) {
      console.error(error);
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const setFavorito = (data: any) => {
    const x = { ...value };

    const exist = x[data];

    if (exist) {
      x[data] = !!x[data];
    } else {
      x[data] = true;
    }

    setValue(x);
  };

  const verificarFavorito = (id: any) => {
    console.log(id, value);
    return value[id] ? 1 : 0;
  };

  return (
    <Container>
      <header className="header">
        <Heading size={1}>Ricky e morty</Heading>
      </header>

      <div className="row">
        <div className="col-lg-12">
          <span className="p-input-icon-left input-text">
            <i className="pi pi-search" />
            <InputText
              placeholder="Pesquise pelo Espisódio"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </span>
          <ButtonSolid
            className="btn-search d-flex col-3"
            onClick={handleSearch}
          >
            Pesquisar e Listar
          </ButtonSolid>

          {episodes.map((episode: Episode) => (
            <div className="col-12 card-content">
              <Card
                className="card"
                title={episode?.episode}
                subTitle={episode?.name}
              >
                <div>
                  <p>Air Date: {episode?.air_date}</p>
                  <p>Number of Characters: {episode?.characters?.length}</p>
                  <p>Favorito</p>
                  <Rating
                    cancel={false}
                    stars={1}
                    value={verificarFavorito(episode?.id)}
                    onChange={() => setFavorito(episode?.id)}
                  />

                  <p>Visto</p>
                  <RadioButton
                    value={episode?.id}
                    onChange={() => setView(episode?.id)}
                    checked={view === episode?.id}
                  />
                  <Link
                    to={`/episode/${episode?.id}`}
                    className="redirect-link"
                  >
                    <ButtonSolid className="btn">detalhes</ButtonSolid>
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default EpisodeList;
