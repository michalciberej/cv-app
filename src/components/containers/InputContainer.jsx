/* eslint-disable react/prop-types */
import PersonInfo from "./PersonInfo";
import Education from "./Education";
import "../../sass/body.scss";
import Experience from "./Experience";
import Skills from "./Skills";
import uuid from "react-uuid";

function InputContainer(props) {
  const { skills, setSkills } = props;
  return (
    <div id="inputContainer">
      <div className="contentContainer">
        <PersonInfo {...props} />
      </div>
      <div className="contentContainer">
        <div id="educationContainer">
          <h2>Education</h2>
          <Education />
          <button type="button" className="addBtn" id="eduBtn">
            Add
          </button>
        </div>
      </div>
      <div className="contentContainer">
        <div id="experienceContainer">
          <h2>Experience</h2>
          <Experience />
          <button type="button" className="addBtn" id="expBtn">
            Add
          </button>
        </div>
      </div>
      <div className="contentContainer">
        <div id="skillsContainer">
          <h2>Skills</h2>
          {skills.map((obj) => (
            <Skills
              key={obj.id}
              setSkill={setSkills}
              skills={obj.skill}
              id={obj.id}
              arr={skills}
            />
          ))}
          <button
            type="button"
            className="addBtn"
            onClick={() => setSkills(skills.concat({ skill: "", id: uuid() }))}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputContainer;
