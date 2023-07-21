import Icon from "@mdi/react";

// eslint-disable-next-line react/prop-types
function Contacts({ heading, icon }) {
  return (
    <div className="contactsContainer">
      <div className="block">
        <Icon path={icon} size={0.8} />
      </div>
      <div className="contactsHeading">{heading}</div>
      <span className="contactsData">444 555 666</span>
    </div>
  );
}

export default Contacts;
