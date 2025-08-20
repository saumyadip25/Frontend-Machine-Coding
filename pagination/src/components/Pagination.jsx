const getPages = (
  paginationStep,
  currentPage,
  totalPages,
  handlePageChange
) => {
  // Calculate the range of page numbers to show
  const start = Math.max(1, currentPage - Math.floor(paginationStep / 2));
  const end = Math.min(start + paginationStep - 1, totalPages);

  const pagination = [];

  // Previous button
  pagination.push(
    <button
      style={{
        padding: "5px",
        margin: "5px",
        width: "30px",
        backgroundColor: "lightgray",
        cursor: "pointer",
      }}
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      {"<"}
    </button>
  );

  // Show first page + ellipsis if needed
  if (1 < start) {
    pagination.push(
      <button
        style={{
          padding: "5px",
          margin: "5px",
          width: "30px",
          backgroundColor: currentPage === 1 ? "orange" : "grey",
          cursor: "pointer",
        }}
        key={1}
        onClick={() => handlePageChange(1)}
      >
        1
      </button>
    );
    // Add ellipsis only if there's a gap
    if (start > 2) {
      pagination.push(
        <button
          style={{
            padding: "5px",
            margin: "5px",
            width: "30px",
            cursor: "pointer",
          }}
          key="ellipses-start"
          disabled
        >
          ...
        </button>
      );
    }
  }

  // Show page numbers in the calculated range
  for (let index = start; index <= end; index++) {
    pagination.push(
      <button
        style={{
          padding: "5px",
          margin: "5px",
          width: "30px",
          backgroundColor: currentPage === index ? "orange" : "grey",
          cursor: "pointer",
        }}
        key={index}
        onClick={() => handlePageChange(index)}
      >
        {index}
      </button>
    );
  }

  // Show ellipsis + last page if needed
  if (end < totalPages) {
    // Add ellipsis only if there's a gap
    if (end < totalPages - 1) {
      pagination.push(
        <button
          style={{
            padding: "5px",
            margin: "5px",
            width: "30px",
            cursor: "pointer",
          }}
          key="ellipses-end"
          disabled
        >
          ...
        </button>
      );
    }

    pagination.push(
      <button
        style={{
          padding: "5px",
          margin: "5px",
          width: "30px",
          cursor: "pointer",
          backgroundColor: currentPage === totalPages ? "orange" : "grey",
        }}
        key={totalPages}
        onClick={() => handlePageChange(totalPages)}
      >
        {totalPages}
      </button>
    );
  }

  // Next button
  pagination.push(
    <button
      style={{
        padding: "5px",
        margin: "5px",
        width: "30px",
        backgroundColor: "lightgray",
        cursor: "pointer",
      }}
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      {">"}
    </button>
  );

  return pagination;
};

const Pagination = (props) => {
  const { totalPages, currentPage, handlePageChange, paginationStep } = props;

  return (
    <div style={{ margin: "100px 10px" }}>
      {getPages(paginationStep, currentPage, totalPages, handlePageChange)}
    </div>
  );
};

export default Pagination;
