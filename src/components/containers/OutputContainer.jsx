import Cvheader from "./Cvheader";
import Cvsidebar from "./Cvsidebar";
import "../../sass/cv.scss";

function OutputContainer() {
  return (
    <div id="outputContainer">
      <div id="cvContainer">
        <Cvheader />
        <Cvsidebar />
      </div>
    </div>
  );
}

export default OutputContainer;
