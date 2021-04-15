import React, { useRef, useState } from "react";
import CustomMenu from "./CustomMenu";
const ContextList = ({ text, className }) => {
  const listItemRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li
      className={className}
      onContextMenu={(e) => {
        e.preventDefault();
        setIsOpen(e);
      }}
    >
      {text}
      <CustomMenu listItemRef={listItemRef} text={text} open={isOpen} />
    </li>
  );
};
export default ContextList;
