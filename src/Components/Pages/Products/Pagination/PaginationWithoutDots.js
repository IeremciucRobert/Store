import React from "react";

export default function PaginationWithoutDots({
  totalPageNumbers,
  currentPage,
  getPage,
}) {
  return (
    <>
      {totalPageNumbers.map((pageNumber) => {
        return (
          <li className="page-item" key={pageNumber}>
            <button
              className={
                currentPage === pageNumber ? "page-link active" : "page-link"
              }
              onClick={() => getPage(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}
    </>
  );
}
