import PropTypes from "prop-types";

const CharacterDropdown = ({ starWarNames, selectedCharacter, handelChange }) => {
  return (
    <select value={selectedCharacter} onChange={handelChange}>
      <option value="" disabled>Select a character</option>
      {starWarNames.map(({ name, url }) => (
        <option key={url} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};
CharacterDropdown.propTypes = {
  starWarNames: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedCharacter: PropTypes.string.isRequired,
  handelChange: PropTypes.func.isRequired,
};

export default CharacterDropdown;