import "../../sass/cv.scss";

function Cvheader({ name, title }) {
  return (
    <div id="cvHeader">
      <span id="name">{name}</span>
      <span id="title">{title}</span>
    </div>
  );
}

export default Cvheader;
