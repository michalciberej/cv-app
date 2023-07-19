import "../../sass/personInfo.scss";

function PersonInfo() {
  return (
    <form method="#" action="#" id="personInfoContainer">
      <h2>Personal Information</h2>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Title"></input>
      <label htmlFor="photoUpload">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>upload</title>
          <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" />
        </svg>
        Photo
        <input id="photoUpload" type="file"></input>
      </label>
      <input type="text" placeholder="Address"></input>
      <input type="text" placeholder="Phone number"></input>
      <input type="text" placeholder="Email"></input>
      <textarea type="text" placeholder="Description"></textarea>
    </form>
  );
}

export default PersonInfo;
