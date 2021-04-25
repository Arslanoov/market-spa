import * as React from "react"

import PrevIcon from "~/assets/images/pagination/icons/prev.png"
import NextIcon from "~/assets/images/pagination/icons/next.png"

import "./styles.scss"

interface PaginationProps {
  pagesCount: number
  currentPage: number
  onPageChange: (page: number) => void
  onPrevPage: () => void
  onNextPage: () => void
}

const Pagination: React.FC<PaginationProps> = ({
  pagesCount,
  currentPage,
  onPageChange,
  onPrevPage,
  onNextPage,
}: PaginationProps) => {
  /* TODO: Add range */
  const pages = []
  for (let i = 0; i < pagesCount; i++) {
    pages.push(
      <div
        key={i}
        onClick={() => onPageChange(i + 1)}
        className={`pagination__item ${currentPage === i + 1 ? "pagination__item_active" : ""}`}
      >
        {i + 1}
      </div>
    )
  }

  return (
    <div className="pagination">
      <div onClick={onPrevPage} className="pagination__item pagination__item_prev">
        <img src={PrevIcon} alt="" />
      </div>
      {pages}
      <div onClick={onNextPage} className="pagination__item pagination__item_next">
        <img src={NextIcon} alt="" />
      </div>
    </div>
  )
}

export default Pagination
