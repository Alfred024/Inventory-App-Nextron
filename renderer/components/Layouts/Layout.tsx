import Head from "next/head"
import { FC, PropsWithChildren, useEffect } from "react"
import { Sidebar } from "../ui"

interface Props extends PropsWithChildren {
    title?: string
}



export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <Sidebar />

            <div 
            className="layout"
            >
                {children}
            </div>
        </>
    )
}
