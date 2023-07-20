import Contacts from "./Contacts";
import { mdiPhone, mdiEmail, mdiEarth, mdiHomeAccount } from "@mdi/js";

function Cvsidebar() {
  return (
    <div id="cvSidebar">
      <img></img>
      <Contacts heading="Phone" icon={mdiPhone} />
      <Contacts heading="Email" icon={mdiEmail} />
      <Contacts heading="Website" icon={mdiEarth} />
      <Contacts heading="Address" icon={mdiHomeAccount} />
    </div>
  );
}

export default Cvsidebar;
