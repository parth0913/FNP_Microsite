import React from "react";
import Dropdown from "../Dropdown/Dropdown";  
import styles from "./LinksCard.module.css"; 

const LinksCard = ({ type, label, url, options, imageSrc, imageAlt }) => {
  return (
    <div className={styles.card}>
      {imageSrc && <img src={imageSrc} alt={imageAlt || "Link Image"} className={styles.image} />}
      {type === "link" ? (
        <a href={url} className={styles.link}>
          {label}
        </a>
      ) : (
        <div className={styles.dropdownContainer}>
          <Dropdown title={label} options={options} />
        </div>
      )}
    </div>
  );
};

export default LinksCard;
