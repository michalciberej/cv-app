import PersonInfo from "./PersonInfo";
import Education from "./Education";
import "../../sass/body.scss";

function InputContainer() {
  return (
    <div id="inputContainer">
      <div className="contentContainer">
        <PersonInfo />
      </div>
      <div className="contentContainer">
        <div id="educationContainer">
          <h2>Education</h2>
          <Education />
          <button type="button" className="addBtn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputContainer;
