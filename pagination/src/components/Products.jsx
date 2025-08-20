import { useState } from "react";
import useDataFetch from "../hooks/useDataFetch";
import Pagination from "./Pagination";

const LIMIT = 10;

const Products = ({ totalRecords }) => {
  const [page, setPage] = useState(1);
  const skip = (page - 1) * LIMIT;
  const { data, loading, error } = useDataFetch({ limit: LIMIT, offset: skip });

  const pageChange = (newPage) => {
    setPage(newPage);
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  const totalPages = Math.ceil(totalRecords / LIMIT);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((item) => {
          return (
            <div
              id={item.id}
              style={{
                display: "flex",
                flexDirection: "column",
                border: "solid 1px black",
                padding: "10px",
                margin: "10px",
              }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: "200px", height: "200px" }}
              />
              <div style={{ textAlign: "center" }}>{item.title}</div>
            </div>
          );
        })}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handlePageChange={pageChange}
        paginationStep={5}
      />
    </div>
  );
};

export default Products;
