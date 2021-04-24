import * as React from "react"

import "./styles.scss"

const Quotes: React.FC = () => {
  return (
    <div className="quotes container">
      <div className="quotes__wrapper">
        <div className="quotes__item quotes__text">See what the buyer saying about S.U.M.O</div>
        <div className="quotes__item quotes__pagination">
          <div className="quotes__pagination-dot quotes__pagination-dot_active"> </div>
          <div className="quotes__pagination-dot"> </div>
          <div className="quotes__pagination-dot"> </div>
          <div className="quotes__pagination-dot"> </div>
        </div>
        <div className="quotes__item quotes__quote">“Classic design, quality construction, and styled minimalism.”</div>
        <div className="quotes__item quotes__author">
          <div className="quotes__author-name">Natalia</div> - <div className="quotes__author-position">CEO sumo</div>
        </div>
      </div>
    </div>
  )
}

export default Quotes
