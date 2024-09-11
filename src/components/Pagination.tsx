interface IPaginationProps {
  totalPosts: number;
  resultsPerPage: number;
  handleClick: (page: number) => void;
  currentPage: number;
}

export function Pagination({ totalPosts, resultsPerPage, handleClick, currentPage }: IPaginationProps) {
  const pages = [];

  // Calculate the amount of pages the total amount of posts will require
  for (let i = 1; i <= Math.ceil(totalPosts / resultsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {
        pages.map((page) => (
          <button className={page === currentPage ? "activePage" : ""} key={page} onClick={() => handleClick(page)}>{page}</button>
        ))
      }
    </div>
  )
}
