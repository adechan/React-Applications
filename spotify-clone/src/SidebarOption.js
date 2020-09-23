import React from "react";
import "./SidebarOption.css";

function SiderbarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h5>{title} </h5> : <p>{title}</p>}
    </div>
  );
}

export default SiderbarOption;
