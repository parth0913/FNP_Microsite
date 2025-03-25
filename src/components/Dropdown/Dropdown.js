import React, { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        {title} 
      </button>
      {isOpen && (
        <ul className={styles.menu}>
          {options.map((option, index) => (
            <li key={index} className={styles.menuItem}>
              <a href={option.url}>{option.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

