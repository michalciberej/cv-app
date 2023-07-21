/* eslint-disable react/prop-types */
import Cvheader from "./Cvheader";
import Cvsidebar from "./Cvsidebar";
import "../../sass/cv.scss";
import Aboutme from "./Aboutme";
import Cvexperience from "./Cvexperience";
import Cveducation from "./Cveducation";

function OutputContainer(props) {
  const { education, descriptionP, experience } = props;
  return (
    <div id="outputContainer">
      <div id="cvContainer">
        <Cvheader {...props} />
        <Cvsidebar {...props} />
        <div id="mainCvContainer">
          {descriptionP != "" ? <Aboutme {...props} /> : null}
          <div id="cvExperienceContainer">
            <h3>Work experience</h3>
            {experience.map((obj) => (
              <Cvexperience experience={obj} key={obj.id} />
            ))}
          </div>
          <div id="cvEducationContainer">
            <h3>Education</h3>
            {education.map((obj) => (
              <Cveducation education={obj} key={obj.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutputContainer;
