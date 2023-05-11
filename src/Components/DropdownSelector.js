import React from "react";
import { Dropdown } from "react-bootstrap";
import "./DropdownSelector.css";

const DropdownSelector = ({ options, onSelect }) => {
  return (
    <Dropdown className="dropdown">
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Seleccionar archivo
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item key={index} onClick={() => onSelect(option)}>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownSelector;
