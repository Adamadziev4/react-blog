import React from "react";

import styles from "./Header.module.css";

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>My personal English Blog</h1>
      <h2 className={styles.description}>
        Здесь вы найдете текста на английском языке по различным тематикам.
        <br />
        Читайте, изучайте, все это бесплатно!
      </h2>
      <div className={styles.search}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <svg
          onClick={() => setSearchValue("")}
          baseProfile="tiny"
          height="32px"
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
        >
          <g id="Guides__x26__Forms" />
          <g id="Icons">
            <polygon points="21.657,8.929 16,14.586 10.343,8.929 8.929,10.343 14.586,16 8.929,21.657 10.343,23.071 16,17.414 21.657,23.071    23.071,21.657 17.414,16 23.071,10.343  " />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Header;
