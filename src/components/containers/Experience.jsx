import "../../sass/experience.scss";

function Experience() {
  return (
    <>
      <input type="text" placeholder="Company"></input>
      <input type="text" placeholder="Job position"></input>
      <input type="text" placeholder="To"></input>
      <input type="text" placeholder="From"></input>
      <textarea type="text" placeholder="Job Descripion"></textarea>
      <button type="button" className="deleteBtn">
        Delete
      </button>
    </>
  );
}

export default Experience;
