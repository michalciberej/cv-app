import Contacts from "./Contacts";
import { mdiPhone, mdiEmail, mdiEarth, mdiHomeAccount } from "@mdi/js";
import Cvskills from "./Cvskills";

function Cvsidebar() {
  return (
    <div id="cvSidebar">
      <img></img>
      <Contacts heading="Phone" icon={mdiPhone} />
      <Contacts heading="Email" icon={mdiEmail} />
      <Contacts heading="Website" icon={mdiEarth} />
      <Contacts heading="Address" icon={mdiHomeAccount} />
      <Cvskills />
    </div>
  );
}

export default Cvsidebar;
