import { FC, PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
    number: number,
    text: string
}

export const InfoCard: FC<Props> = ({ children, number, text }) => {
    return (
        <div className="InfoCard">
            <div>
                {children}
            </div>
            <div className="info">
                <p className="number">{number}</p>
                <p className="text">{text}</p>
            </div>
        </div>
    )
}
