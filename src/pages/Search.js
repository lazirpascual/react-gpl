import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");

  // useQuery executes and data is fetched right away when the component renders
  // when using lazy query, the query is not executed right away
  // it only runs when you need it to, like clicking a button
  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    { variables: { name } }
  );

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong!</div>;

  return (
    <div>
      <form onSubmit={() => getLocations()}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button>Search</button>
      </form>
      {data && (
        <ul>
          {data.characters.results.map((character) => (
            <li>{character.location.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
