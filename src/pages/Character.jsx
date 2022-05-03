import React from "react";
import { useParams } from "react-router";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";

const Character = () => {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Character with ID {id} does not exist!</div>;

  return (
    <div className="Character">
      <img src={data.character.image} width={750} height={750} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => (
            <div key={episode.id}>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
