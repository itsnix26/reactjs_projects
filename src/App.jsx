import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CharacterDropdown from "./CharacterDropdown";
import CharacterTable from "./CharacterTable";

function App() {
  const [starWarNames, setStarWarNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [characterDetails, setCharacterDetails] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState("");

  const fetchData = async (url) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const fetchStarWarName = async () => {
    setLoading(true);
    try {
      const data = await fetchData("https://swapi.dev/api/people/");
      setStarWarNames(data.results);
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCharacterDetails = async (url) => {
    setLoading(true);
    try {
      const character = await fetchData(url);
      const films = await Promise.all(character.films.map(fetchData));
      const vehicles = await Promise.all(character.vehicles.map(fetchData));
      setCharacterDetails({
        name: character.name,
        films: films.map(film => film.title),
        vehicles: vehicles.map(vehicle => vehicle.name),
      });
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handelChange = (e) => {
    const selectedCharacterName = e.target.value;
    setSelectedCharacter(selectedCharacterName);
    const selectedCharacter = starWarNames.find(character => character.name === selectedCharacterName);
    if (selectedCharacter) {
      fetchCharacterDetails(selectedCharacter.url);
    }
  };

  useEffect(() => {
    fetchStarWarName();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (err) {
    return <p>Error : {err}</p>;
  }

  return (
    <>
      <h1>Star Wars Characters</h1>
      <CharacterDropdown
        starWarNames={starWarNames}
        selectedCharacter={selectedCharacter}
        handelChange={handelChange}
      />
      {characterDetails && <CharacterTable characterDetails={characterDetails} />}
    </>
  );
}

export default App;
