export interface Episode {
    id: string;
    episode: string;
    name: string;
    air_date: string;
    characters: {
      id: string;
      name: string;
      image: string;
      species: string;
      status: string;
    }[];
  }