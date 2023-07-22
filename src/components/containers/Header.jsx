import "../../sass/header.scss";
import Icon from "@mdi/react";
import { mdiWeatherSunny } from "@mdi/js";
import { jsPDF } from "jspdf";

function Header() {
  const pdf = new jsPDF("p", "px", [586.667, 785.1]);

  const convertPdf = () => {
    pdf.html(document.querySelector("#cvContainer"), {
      callback: function (pdf) {
        pdf.save();
      },
    });
  };

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = () => {
    const body = document.querySelector("body");
    if (body.dataset.theme === "dark") setLightMode();
    else setDarkMode();
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "light") {
    setLightMode();
  } else {
    setDarkMode();
  }

  return (
    <div id="header">
      <h1>CV Creator</h1>
      <button type="button" onClick={convertPdf}>
        Convert to PDF
      </button>
      <Icon path={mdiWeatherSunny} size={1.4} onClick={toggleTheme} />
    </div>
  );
}

export default Header;
