import React, { useState, useEffect } from "react";
import del from "../icons/delete.svg";
import edit from "../icons/pencil.svg";

const CustomMenu = ({ text, listItemRef, open }) => {
  const [isOpen, setIsOpen] = useState(false);
  const editOnClick = () => {
    console.log("edit");
    setIsOpen(false);
  };
  const deleteOnClick = () => {
    console.log("delete");
    setIsOpen(false);
  };
  useEffect(() => {
    open && setIsOpen(true);
  }, [open]);

  useEffect(() => {
    const CloseContextMenu = (e) => {
      let listItem = listItemRef.current;
      listItem && listItem.contains(e.target)
        ? e.preventDefault()
        : setIsOpen(false);
    };
    document.addEventListener("click", CloseContextMenu);

    return () => {
      document.removeEventListener("click", CloseContextMenu);
    };
  });

  return isOpen ? (
    <div className="menu">
      <div className="name">{text}</div>
      <div className="edit" onClick={editOnClick}>
        <img className="icon" src={edit} alt="edit icon" />
        <span>edit</span>
      </div>
      <div className="delete" onClick={deleteOnClick}>
        <img className="icon" src={del} alt="delete icon" />
        <span>delete</span>
      </div>
    </div>
  ) : null;
};
export default CustomMenu;
