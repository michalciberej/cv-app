import "../../sass/education.scss";

function Education() {
  return (
    <>
      <input type="text" placeholder="School"></input>
      <input type="text" placeholder="Major"></input>
      <input type="text" placeholder="From"></input>
      <input type="text" placeholder="To"></input>
      <button type="button" className="deleteBtn">
        Delete
      </button>
    </>
  );
}

export default Education;
