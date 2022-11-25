import React from "react";

import styles from "./Pagination.module.css";

const Pagination = ({ pageCount, changePage, currentPage }) => {
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const onClickPage = (pageNum) => {
    console.log(pageNum);
    changePage(pageNum);
  };

  return (
    <div className={styles.root}>
      <ul>
        {pages.length !== 1 &&
          pages.map((pageNum) => {
            return (
              <li
                className={currentPage === pageNum && styles.active}
                key={pageNum}
                onClick={() => onClickPage(pageNum)}
              >
                {pageNum}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Pagination;
