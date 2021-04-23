import React from "react";
import PaginationNumbering from "./PaginationNumbering";

export default function Pagination({
  productsPerPage,
  totalProducts,
  getPage,
  currentPage,
  arrowPaginate,
}) {
  const totalPageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    totalPageNumbers.push(i);
  }

  const lastPage = Math.ceil(totalProducts / productsPerPage);

  return (
    <nav className="paginationWrap">
      <ul className="pagination mb-0">
        <li className="page-item">
          <button
            className={
              currentPage === 1
                ? "page-link paginationDisableButton"
                : "page-link"
            }
            onClick={() => arrowPaginate("decrement", totalPageNumbers)}
          >
            <span
              className={
                currentPage === 1
                  ? "pageArrow pageArrowLeft pageArrowDisabled"
                  : "pageArrow pageArrowLeft"
              }
            ></span>
          </button>
        </li>
        <PaginationNumbering
          totalPageNumbers={totalPageNumbers}
          currentPage={currentPage}
          getPage={getPage}
        />
        <li className="page-item">
          <button
            className={
              currentPage === lastPage
                ? "page-link paginationDisableButton"
                : "page-link"
            }
            onClick={() => arrowPaginate("increment", totalPageNumbers)}
          >
            <span
              className={
                currentPage === lastPage
                  ? "pageArrow pageArrowDisabled"
                  : "pageArrow"
              }
            ></span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
