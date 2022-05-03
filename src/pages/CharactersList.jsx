import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./CharacterList.css";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharactersList = () => {
  // error is populated and can be caught when encounter an error
  // loading is a boolean value (true if fetching data, false otherwise)
  // data contains the result of the query
  const { error, data, loading } = useQuery(GET_CHARACTERS);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong!</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => (
        <div id={character.id}>
          <img src={character.image} />
          <h2>{character.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CharactersList;
