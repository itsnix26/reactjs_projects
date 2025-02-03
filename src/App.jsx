import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [starWarNames, setStarWarNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const fetchStarWarName = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://swapi.dev/api/people/");
      setStarWarNames(res?.data?.results);
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handelChange = (e) => {
    try {
      
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchStarWarName();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (err) {
    return <p>Error : {err}</p>;
  }

  return (
    <>
      <h1>Star Wars Characters</h1>
      <select onChange={handelChange}>
        {starWarNames.map(({ name, url }) => {
          return (
            <option key={url} value={name}>
              {name}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default App;
