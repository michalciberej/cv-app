import InputContainer from "./containers/InputContainer";
import OutputContainer from "./containers/OutputContainer";
import Header from "./containers/Header";
import "../sass/body.scss";

function Main() {
  return (
    <div id="mainContainer">
      <div className="contentContainer">
        <Header />
      </div>
      <InputContainer />
      <OutputContainer />
    </div>
  );
}

export default Main;
