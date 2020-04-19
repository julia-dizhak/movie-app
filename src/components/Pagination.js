import React from "react";

export default function Pagination(props) {
  const { currentPage, totalPages, setCurrentPage} = props;

  const pageNumbers = Array.from(Array(totalPages).keys());
  const renderPages = pageNumbers.map((page, index) => {
    if (
      page === 1 ||
      page === totalPages ||
      (page >= currentPage - 2 && page <= currentPage + 2)
    ) {
      return (
        <button
          key={page + index}
          type="button"
          className={currentPage === page ? 'active' : null}
          onClick={() => setCurrentPage(page)}
          >
            {page}
        </button>
      )
    }
    return null
  });

  return (
    <div className="pagination mb-3 mt-4">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}>
        prev
      </button>
      {renderPages}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}>
        next
      </button>
      {totalPages}
    </div>
  );
}

