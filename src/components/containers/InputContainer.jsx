import PersonInfo from "./PersonInfo";
import Education from "./Education";
import "../../sass/body.scss";
import Experience from "./Experience";
import Skills from "./Skills";

function InputContainer(props) {
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
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default InputContainer;
