import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import { Heading } from "../../../design-system/Heading/Heading";
import { Card } from "primereact/card";
import { Episode } from "../entities/detail";

        
const GET_EPISODE_BY_ID = gql`
  query GetEpisodeById($id: ID!) {
    episode(id: $id) {
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
`;


function EpisodeDetails() {
  const { id } = useParams<string>();
  const { loading, error, data } = useQuery(GET_EPISODE_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const episode: Episode = data.episode;
  
  return (
    <Container>
      <header className="header">
        <Heading size={1}>Todos os detalhes do seu episódio</Heading>
      </header>
      <div className="row">
        <div className="col-lg-12">
          {episode.characters.map((character) => (
            <div key={character.id}>
              <div className="col-12 card-content">
                <Card
                  className="card"
                  title={episode.episode}
                  
                >
                  <p>Name: {episode.name}</p>
                  <p>Air Date: {episode.air_date}</p>
                  <h3>Characters</h3>
                  <p>Name: {character.name}</p>
                  <p>Species: {character.species}</p>
                  <p>Status: {character.status}</p>
                  
                </Card>
                <img src={character.image} alt={character.name} className="img" /> 

              </div>
              
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default EpisodeDetails;
