/* eslint-disable react/prop-types */
import "../../sass/cv.scss";

function Cvskills({ skills }) {
  return (
    <div id="cvSkillsContainer">
      <h3>Skills</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cvskills;
