import "../../sass/personInfo.scss";
import Icon from "@mdi/react";
import { mdiUpload } from "@mdi/js";

function PersonInfo({
  setName,
  setTitle,
  setPhoto,
  setEmail,
  setNumber,
  setWebsite,
  setAddress,
  setDescriptionP,
}) {
  return (
    <form method="#" action="#" id="personInfoContainer">
      <h2>Personal Information</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <label htmlFor="photoUpload">
        <Icon path={mdiUpload} size={1.3} />
        Photo
        <input
          id="photoUpload"
          type="file"
          onChange={(e) => setPhoto(e.target.files[0])}
        ></input>
      </label>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Phone number"
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Website"
        onChange={(e) => setWebsite(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Address"
        onChange={(e) => setAddress(e.target.value)}
      ></input>
      <textarea
        type="text"
        placeholder="Description"
        onChange={(e) => setDescriptionP(e.target.value)}
      ></textarea>
    </form>
  );
}

export default PersonInfo;
