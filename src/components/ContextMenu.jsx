import React from "react";

import ContextList from "./ContextList";
const ContextMenu = () => {
  const data = [
    { name: "home", class: "list col-1" },
    { name: "gallery", class: "list col-2" },
    { name: "about", class: "list col-3" },
    { name: "contact", class: "list col-4" },
  ];

  return (
    <div className="container">
      <ul>
        {data.map((item, idx) => (
          <ContextList key={idx} text={item.name} className={item.class} />
        ))}
      </ul>
    </div>
  );
};
export default ContextMenu;
