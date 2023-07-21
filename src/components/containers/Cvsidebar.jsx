/* eslint-disable react/prop-types */
import Contacts from "./Contacts";
import { mdiPhone, mdiEmail, mdiEarth, mdiHomeAccount } from "@mdi/js";
import Cvskills from "./Cvskills";

function Cvsidebar({ photo, number, email, website, address, skills }) {
  return (
    <div id="cvSidebar">
      <img src={photo}></img>
      <Contacts heading="Phone" icon={mdiPhone} data={number} />
      <Contacts heading="Email" icon={mdiEmail} data={email} />
      <Contacts heading="Website" icon={mdiEarth} data={website} />
      <Contacts heading="Address" icon={mdiHomeAccount} data={address} />
      <Cvskills skills={skills} />
    </div>
  );
}

export default Cvsidebar;
