import "../../sass/header.scss";
import Icon from "@mdi/react";
import { mdiWeatherSunny } from "@mdi/js";
import { jsPDF } from "jspdf";

function Header() {
  const pdf = new jsPDF("p", "px", [586.667, 807.783]);

  const convertPdf = () => {
    pdf.html(document.querySelector("#cvContainer"), {
      callback: function (pdf) {
        pdf.save();
      },
      width: 701,
    });
    pdf.scale(0.1);
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

  if (selectedTheme === "dark") {
    setDarkMode();
  } else {
    setLightMode();
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
