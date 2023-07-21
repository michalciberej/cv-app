import { useState } from "react";
import InputContainer from "./containers/InputContainer";
import OutputContainer from "./containers/OutputContainer";
import Header from "./containers/Header";
import uuid from "react-uuid";
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
  const [skills, setSkills] = useState([
    { skill: "Java", id: uuid() },
    { skill: "HTML", id: uuid() },
    { skill: "CSS", id: uuid() },
  ]);
  // const [experience, setExperience] = useState([
  //   {
  //     date: "",
  //     position: "",
  //     employer: "",
  //     jobDescription: "",
  //     id: uuid(),
  //   },
  // ]);
  const [education, setEducation] = useState([
    {
      date: "",
      Major: "",
      school: "",
      id: uuid(),
    },
  ]);

  return (
    <div id="mainContainer">
      <div className="contentContainer">
        <Header />
      </div>
      <InputContainer
        setName={setName}
        setTitle={setTitle}
        setEmail={setEmail}
        setNumber={setNumber}
        setWebsite={setWebsite}
        setAddress={setAddress}
        setDescriptionP={setDescriptionP}
        setPhoto={setPhoto}
        skills={skills}
        setSkills={setSkills}
        education={education}
        setEducation={setEducation}
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
      />
    </div>
  );
}

export default Main;
