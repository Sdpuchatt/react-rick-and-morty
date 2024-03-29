import { useEffect, useState } from "react";
import Character from "./Character";
function CharacterList() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchData();
  }, []);
  return (
    <div className="container bg-danger">
      {characters.map((character) => {
        return (
          <div className="col-md-4" key={character.id}>
            <Character character={character} />
          </div>
        );
      })}
    </div>
  );
}

export default CharacterList;
