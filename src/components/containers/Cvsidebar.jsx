/* eslint-disable react/prop-types */
import Contacts from "./Contacts";
import { mdiPhone, mdiEmail, mdiEarth, mdiHomeAccount } from "@mdi/js";
import Cvskills from "./Cvskills";

function Cvsidebar({ photo, number, email, website, address, skills }) {
  return (
    <div id="cvSidebar">
      <img src={photo} alt={photo}></img>
      {number != "" ? (
        <Contacts heading="Phone" icon={mdiPhone} data={number} />
      ) : null}
      {email != "" ? (
        <Contacts heading="Email" icon={mdiEmail} data={email} />
      ) : null}
      {website != "" ? (
        <Contacts heading="Website" icon={mdiEarth} data={website} />
      ) : null}
      {address != "" ? (
        <Contacts heading="Address" icon={mdiHomeAccount} data={address} />
      ) : null}
      <Cvskills skills={skills} />
    </div>
  );
}

export default Cvsidebar;
