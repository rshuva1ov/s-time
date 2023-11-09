import React from 'react';
import styles from './pagination.module.css';
//@ts-ignore
import { ReactComponent as MySvg6 } from '../../utils/6.svg';
//@ts-ignore
import { ReactComponent as MySvg7 } from '../../utils/7.svg';

interface PaginationInterface {
  pagesArray: number[],
  totalPages: number,
  currentPage: number,
  changePage: (page: number) => void;
}

export const Pagination = ({ pagesArray, totalPages, currentPage, changePage }: PaginationInterface) => {
  function createPages(pages: number[], pagesCount: number, currentPage: number) {
    if (pagesCount > 10) {
      if (currentPage > 5) {
        for (let i = currentPage - 4; i <= currentPage + 5; i++) {
          pages.push(i);
          if (i === pagesCount) break;
        }
      } else {
        for (let i = 1; i <= 10; i++) {
          pages.push(i);
          if (i === pagesCount) break;
        }
      }
    } else {
      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
      }
    }
  }

  createPages(pagesArray, totalPages, currentPage);
  const isFirstPage = currentPage === 1;
  const previousPage = currentPage - 1;
  const isLastPage = currentPage === totalPages;
  const nextPage = currentPage + 1;
  const pagesToDisplay = [...pagesArray];
  if (pagesToDisplay[pagesToDisplay.length - 1] === totalPages) {
    pagesToDisplay.pop();
  }

  return (
    <div className={styles.pagination}>
      <span
        onClick={() => { !isFirstPage ? changePage(previousPage) : changePage(currentPage) }}
        className={styles.page}
      >
        <MySvg6 />
      </span>
      {pagesToDisplay.map((page, index) => (
        <span
          onClick={() => changePage(page)}
          key={index + 1}
          className={currentPage === page ? [styles.page, styles.pageCurrent].join(' ') : styles.page}
        >
          {page}
        </span>
      ))}
      <span className={styles.points}>...</span>
      <span
        className={currentPage === totalPages ? [styles.page, styles.pageCurrent].join(' ') : styles.page}
        onClick={() => changePage(totalPages)}
      >{totalPages}</span>


      <span
        onClick={() => { !isLastPage ? changePage(nextPage) : changePage(currentPage) }}
        className={styles.page}
      >
        <MySvg7 />
      </span>
    </div>
  );
};
