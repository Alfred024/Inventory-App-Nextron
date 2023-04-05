import Head from "next/head"
import { PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
    title?: string
}
export const AuthLayout = ({ children, title }) => {
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
