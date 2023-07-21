/* eslint-disable react/prop-types */
import "../../sass/skills.scss";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";

function Skills({ skills, setSkill, id, arr }) {
  const handleBtnClick = () => setSkill(arr.filter((obj) => obj.id !== id));

  const handleInput = (e) => {
    const newSkill = arr.map((obj) => {
      if (obj.id === id) {
        return { ...obj, skill: e.target.value };
      }
      return obj;
    });
    setSkill(newSkill);
  };

  return (
    <div className="skill" key={id}>
      <input type="text" value={skills} onChange={handleInput}></input>
      <button type="button" className="trashBtn" onClick={handleBtnClick}>
        <Icon path={mdiTrashCanOutline} size={1} />
      </button>
    </div>
  );
}

export default Skills;
