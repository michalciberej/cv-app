/* eslint-disable react/prop-types */
import "../../sass/education.scss";

function Education({ education, setEducation, id }) {
  const handleBtnClick = () =>
    setEducation(education.filter((a) => a.id != id));

  const handleSchoolInput = (e) => {
    const newObj = education.map((obj) => {
      if (obj.id === id) {
        return { ...obj, school: e.target.value };
      }
      return obj;
    });
    setEducation(newObj);
  };
  const handleFromInput = (e) => {
    const newObj = education.map((obj) => {
      if (obj.id === id) {
        return { ...obj, from: e.target.value };
      }
      return obj;
    });
    setEducation(newObj);
  };
  const handleToInput = (e) => {
    const newObj = education.map((obj) => {
      if (obj.id === id) {
        return { ...obj, to: e.target.value };
      }
      return obj;
    });
    setEducation(newObj);
  };
  const handleMajorInput = (e) => {
    const newObj = education.map((obj) => {
      if (obj.id === id) {
        return { ...obj, major: e.target.value };
      }
      return obj;
    });
    setEducation(newObj);
  };

  return (
    <>
      <input
        type="text"
        placeholder="School"
        onChange={handleSchoolInput}
      ></input>
      <input
        type="text"
        placeholder="Major"
        onChange={handleMajorInput}
      ></input>
      <input type="text" placeholder="From" onChange={handleFromInput}></input>
      <input type="text" placeholder="To" onChange={handleToInput}></input>
      <button type="button" className="deleteBtn" onClick={handleBtnClick}>
        Delete
      </button>
    </>
  );
}

export default Education;
