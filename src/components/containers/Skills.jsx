import "../../sass/skills.scss";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";

function Skills() {
  return (
    <>
      <input type="text" placeholder="Html"></input>
      <button type="button" className="trashBtn">
        <Icon path={mdiTrashCanOutline} size={1.1} />
      </button>
      <button type="button" className="addBtn">
        Add
      </button>
    </>
  );
}

export default Skills;
