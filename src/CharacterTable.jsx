import PropTypes from "prop-types";

const CharacterTable = ({ characterDetails }) => {
  return (
    <table className="character-table">
      <thead>
        <tr>
          <th>Character</th>
          <th>Films</th>
          <th>Vehicles</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{characterDetails.name}</td>
          <td>
            {characterDetails.films.length > 0 ? (
              <ul>
                {characterDetails.films.map((film, index) => (
                  <li key={index}>{film}</li>
                ))}
              </ul>
            ) : (
              <p>No data for this field</p>
            )}
          </td>
          <td>
            {characterDetails.vehicles.length > 0 ? (
              <ul>
                {characterDetails.vehicles.map((vehicle, index) => (
                  <li key={index}>{vehicle}</li>
                ))}
              </ul>
            ) : (
              <p>No data for this field</p>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
CharacterTable.propTypes = {
  characterDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(PropTypes.string).isRequired,
    vehicles: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CharacterTable;