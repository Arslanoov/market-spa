import * as React from "react"

import "./styles.scss"

interface OverviewAddProps {
  order: string
}

const OverviewAdd: React.FC<OverviewAddProps> = ({ order }: OverviewAddProps) => {
  return (
    <div className="overview-add">
      <div className="overview-add__icon"> </div>
      <div className={`overview-add__modal add-modal add-modal_${order}`}>
        <div className="add-modal__title">Benzene ring titanium</div>
        <div className="add-modal__description">
          Vivamus elementum ex id justo molestie, rhoncus blandit metus interdum
        </div>
      </div>
    </div>
  )
}

export default OverviewAdd
