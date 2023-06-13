// import React from "react";
// import { Pagination, PaginationItem } from "@mui/material";
// import { Link } from "react-router-dom";

// function Paginate({ page, pages, keyword = "" }) {
//   return (
//     pages > 1 && (
//       <Pagination>
//         {[...Array(pages).keys()].map((x) => (
//           <PaginationItem key={x + 1} active={x + 1 === page}>
//             <Link
//               to={`/?keyword=${keyword}&page=${x + 1}`}
//               style={{ textDecoration: "none" }}
//             >
//               {x + 2}
//             </Link>
//           </PaginationItem>
//         ))}
//       </Pagination>
//     )
//   );
// }

// export default Paginate;
import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ page, pages, keyword }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((pageNumber) => (
          <LinkContainer
            key={pageNumber + 1}
            to={keyword ? `/search/${keyword}/page/${pageNumber + 1}` : `/page/${pageNumber + 1}`}
          >
            <Pagination.Item active={pageNumber + 1 === page}>{pageNumber + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
