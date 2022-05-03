import React from "react";
import "./CharacterList.css";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

const CharactersList = () => {
  // error is populated and can be caught when encounter an error
  // loading is a boolean value (true if fetching data, false otherwise)
  // data contains the result of the query
  const { error, data, loading } = useCharacters();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong!</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => (
        <div key={character.id}>
          <Link to={character.id}>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CharactersList;
