import React from "react";
import PaginationWithoutDots from "./PaginationWithoutDots";
import PaginationWithDots from "./PaginationWithDots";

export default function PaginationNumbering({
  totalPageNumbers,
  currentPage,
  getPage,
}) {
  if (totalPageNumbers.length < 6) {
    return (
      <PaginationWithoutDots
        totalPageNumbers={totalPageNumbers}
        currentPage={currentPage}
        getPage={getPage}
      />
    );
  }
  return (
    <PaginationWithDots
      totalPageNumbers={totalPageNumbers}
      currentPage={currentPage}
      getPage={getPage}
    />
  );
}
