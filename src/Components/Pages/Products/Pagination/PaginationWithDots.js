import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function PaginationWithDots({
  totalPageNumbers,
  currentPage,
  getPage,
}) {
  let pagesBeforeDots = [];
  let index = totalPageNumbers.indexOf(currentPage);
  let last = totalPageNumbers[totalPageNumbers.length - 1];
  let thirdFromEnd = totalPageNumbers[totalPageNumbers.length - 3];

  if (index === 0) {
    pagesBeforeDots = totalPageNumbers.slice(0, 3);
  } else if (index >= totalPageNumbers[thirdFromEnd]) {
    let thirdFromEnd = totalPageNumbers.length - 3;
    let secondFromEnd = totalPageNumbers.length - 2;
    let last = totalPageNumbers.length - 1;

    pagesBeforeDots = [
      totalPageNumbers[thirdFromEnd],
      totalPageNumbers[secondFromEnd],
      totalPageNumbers[last],
    ];
  } else {
    pagesBeforeDots = [
      totalPageNumbers[index - 1],
      totalPageNumbers[index],
      totalPageNumbers[index + 1],
    ];
  }

  return (
    <>
      {pagesBeforeDots.map((pageNumber) => {
        return (
          <li className="page-item" key={uuidv4()}>
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
      {currentPage >= thirdFromEnd ? (
        ""
      ) : (
        <li className="page-item">
          <span className="page-link paginationDots">...</span>
        </li>
      )}
      {thirdFromEnd < currentPage ? (
        ""
      ) : (
        <li className="page-item">
          <button
            className={currentPage === last ? "page-link active" : "page-link"}
            onClick={() => getPage(last)}
          >
            {last}
          </button>
        </li>
      )}
    </>
  );
}
