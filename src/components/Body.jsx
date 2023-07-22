import { useState } from "react";
import InputContainer from "./containers/InputContainer";
import OutputContainer from "./containers/OutputContainer";
import Header from "./containers/Header";
import "../sass/body.scss";

function Main() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [descriptionP, setDescriptionP] = useState("");
  const [photo, setPhoto] = useState("");
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  return (
    <div id="mainContainer">
      <div className="contentContainer">
        <Header photo={photo} />
      </div>
      <InputContainer
        setName={setName}
        setTitle={setTitle}
        setEmail={setEmail}
        setNumber={setNumber}
        setWebsite={setWebsite}
        setAddress={setAddress}
        setDescriptionP={setDescriptionP}
        photo={photo}
        setPhoto={setPhoto}
        skills={skills}
        setSkills={setSkills}
        education={education}
        setEducation={setEducation}
        experience={experience}
        setExperience={setExperience}
      />
      <OutputContainer
        name={name}
        title={title}
        email={email}
        number={number}
        website={website}
        address={address}
        descriptionP={descriptionP}
        photo={photo}
        skills={skills}
        education={education}
        experience={experience}
      />
    </div>
  );
}

export default Main;
