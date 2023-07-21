/* eslint-disable react/prop-types */
function Cveducation({ education }) {
  return (
    <div className="education">
      <span className="date">
        {education.from} - {education.to}
      </span>
      <span className="major">{education.major}</span>
      <span className="school">{education.school}</span>
    </div>
  );
}

export default Cveducation;
