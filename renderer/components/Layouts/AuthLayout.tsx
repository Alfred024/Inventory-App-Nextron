import Head from "next/head"
import { FC, PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
    title?: string
}
export const AuthLayout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="center-div" style={{ height: '100vh' }}>
                {children}
            </div>
        </>
    )
}
