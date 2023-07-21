/* eslint-disable react/prop-types */
function Cvexperience({ experience }) {
  return (
    <div className="work">
      <span className="date">
        {experience.from} - {experience.to}
      </span>
      <span className="position">{experience.position}</span>
      <span className="eployer">{experience.company}</span>
      <span className="jobDescription">{experience.jobDescription}</span>
    </div>
  );
}

export default Cvexperience;
