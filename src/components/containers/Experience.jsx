/* eslint-disable react/prop-types */
import "../../sass/experience.scss";

function Experience({ experience, setExperience, id }) {
  const handleBtnClick = () =>
    setExperience(experience.filter((obj) => obj.id != id));

  const handleCompanyInput = (e) => {
    const newObj = experience.map((obj) => {
      if (obj.id === id) {
        return { ...obj, company: e.target.value };
      }
      return obj;
    });
    setExperience(newObj);
  };
  const handleFromInput = (e) => {
    const newObj = experience.map((obj) => {
      if (obj.id === id) {
        return { ...obj, from: e.target.value };
      }
      return obj;
    });
    setExperience(newObj);
  };
  const handleToInput = (e) => {
    const newObj = experience.map((obj) => {
      if (obj.id === id) {
        return { ...obj, to: e.target.value };
      }
      return obj;
    });
    setExperience(newObj);
  };
  const handlePositionInput = (e) => {
    const newObj = experience.map((obj) => {
      if (obj.id === id) {
        return { ...obj, position: e.target.value };
      }
      return obj;
    });
    setExperience(newObj);
  };
  const handleJobDescriptionInput = (e) => {
    const newObj = experience.map((obj) => {
      if (obj.id === id) {
        return { ...obj, jobDescription: e.target.value };
      }
      return obj;
    });
    setExperience(newObj);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Company"
        onChange={handleCompanyInput}
      ></input>
      <input
        type="text"
        placeholder="Job position"
        onChange={handlePositionInput}
      ></input>
      <input type="text" placeholder="From" onChange={handleFromInput}></input>
      <input type="text" placeholder="To" onChange={handleToInput}></input>
      <textarea
        type="text"
        placeholder="Job Descripion"
        onChange={handleJobDescriptionInput}
      ></textarea>
      <button type="button" className="deleteBtn" onClick={handleBtnClick}>
        Delete
      </button>
    </>
  );
}

export default Experience;
