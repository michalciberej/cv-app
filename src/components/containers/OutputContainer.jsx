import Cvheader from "./Cvheader";
import Cvsidebar from "./Cvsidebar";
import "../../sass/cv.scss";
import Aboutme from "./Aboutme";
import Cvexperience from "./Cvexperience";

function OutputContainer() {
  return (
    <div id="outputContainer">
      <div id="cvContainer">
        <Cvheader />
        <Cvsidebar />
        <div id="mainCvContainer">
          <Aboutme />
          <div id="cvExperienceContainer">
            <h3>Work experience</h3>
            <Cvexperience />
            <Cvexperience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutputContainer;
