import "../../sass/personInfo.scss";
import Icon from "@mdi/react";
import { mdiUpload } from "@mdi/js";

function PersonInfo() {
  return (
    <form method="#" action="#" id="personInfoContainer">
      <h2>Personal Information</h2>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Title"></input>
      <label htmlFor="photoUpload">
        <Icon path={mdiUpload} size={1.3} />
        Photo
        <input id="photoUpload" type="file"></input>
      </label>
      <input type="text" placeholder="Email"></input>
      <input type="text" placeholder="Phone number"></input>
      <input type="text" placeholder="Website"></input>
      <input type="text" placeholder="Address"></input>
      <textarea type="text" placeholder="Description"></textarea>
    </form>
  );
}

export default PersonInfo;
