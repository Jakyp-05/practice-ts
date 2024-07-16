import React from "react";
import "./Pagination.css";
import { GrPrevious, GrNext } from "react-icons/gr";

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button onClick={() => paginate(1)} className="page-link">
            First
          </button>
        </li>
        <li className="page-item">
          <button
            onClick={() => paginate(currentPage - 1)}
            className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number, index) => (
          <li
            className={`page-item ${number === currentPage ? "active" : ""}`}
            key={index}
          >
            <button className="page-link">{number}</button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button onClick={() => paginate(totalPages)} className="page-link">
            <GrPrevious />
          </button>
        </li>
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            onClick={() => paginate(currentPage + 1)}
            className="page-link"
          >
            <GrNext />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
