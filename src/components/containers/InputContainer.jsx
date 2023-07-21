/* eslint-disable react/prop-types */
import PersonInfo from "./PersonInfo";
import Education from "./Education";
import "../../sass/body.scss";
import Experience from "./Experience";
import Skills from "./Skills";
import uuid from "react-uuid";

function InputContainer(props) {
  const { skills, setSkills } = props;
  const { education, setEducation } = props;
  const { experience, setExperience } = props;
  return (
    <div id="inputContainer">
      <div className="contentContainer">
        <PersonInfo {...props} />
      </div>
      <div className="contentContainer">
        <div id="experienceContainer">
          <h2>Experience</h2>
          {experience.map((obj) => (
            <Experience {...props} key={obj.id} id={obj.id} />
          ))}
          <button
            type="button"
            className="addBtn"
            id="expBtn"
            onClick={() => {
              experience.length < 3
                ? setExperience(
                    experience.concat({
                      from: "",
                      to: "",
                      position: "",
                      company: "",
                      jobDescription: "",
                      id: uuid(),
                    })
                  )
                : null;
            }}
          >
            Add
          </button>
        </div>
      </div>
      <div className="contentContainer">
        <div id="educationContainer">
          <h2>Education</h2>
          {education.map((obj) => (
            <Education {...props} key={obj.id} id={obj.id} />
          ))}
          <button
            type="button"
            className="addBtn"
            id="eduBtn"
            onClick={() =>
              education.length < 3
                ? setEducation(
                    education.concat({
                      from: "",
                      to: "",
                      Major: "",
                      school: "",
                      id: uuid(),
                    })
                  )
                : null
            }
          >
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
            onClick={() =>
              skills.length < 8
                ? setSkills(skills.concat({ skill: "", id: uuid() }))
                : null
            }
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputContainer;
