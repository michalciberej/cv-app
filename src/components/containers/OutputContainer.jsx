import Cvheader from "./Cvheader";
import Cvsidebar from "./Cvsidebar";
import "../../sass/cv.scss";
import Aboutme from "./Aboutme";
import Cvexperience from "./Cvexperience";
import Cveducation from "./Cveducation";

function OutputContainer(props) {
  return (
    <div id="outputContainer">
      <div id="cvContainer">
        <Cvheader {...props} />
        <Cvsidebar {...props} />
        <div id="mainCvContainer">
          <Aboutme {...props} />
          <div id="cvExperienceContainer">
            <h3>Work experience</h3>
            <Cvexperience />
            <Cvexperience />
          </div>
          <div id="cvEducationContainer">
            <h3>Education</h3>
            <Cveducation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutputContainer;
