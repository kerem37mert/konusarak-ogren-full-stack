import React from 'react';

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <div className="pagination">
      <button onClick={onPrevPage} disabled={currentPage === 1}>
        Önceki
      </button>
      <span>Sayfa {currentPage} / {totalPages}</span>
      <button onClick={onNextPage} disabled={currentPage === totalPages}>
        Sonraki
      </button>
    </div>
  );
};

export default Pagination;
