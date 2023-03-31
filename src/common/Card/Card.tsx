import React, {ReactNode} from "react";

type CardProps = {
    headerComponent? : ReactNode;
    content: ReactNode;
    extraClass?: string
}

const Card = ({headerComponent, content, extraClass} : CardProps) => {

    const cardClasses : string = `c-card ${extraClass ? extraClass : ""}`

    return(
        <div className={cardClasses}>
            <div className="c-card__inner">
                <div className="c-card__header">
                    {headerComponent}
                </div>
                <div className="c-card__content">
                    {content}
                </div>
            </div>
        </div>
    )
}
export default Card;