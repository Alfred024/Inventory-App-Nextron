import Head from "next/head"
import { FC, PropsWithChildren } from "react"
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

            <div style={{marginLeft:'50px'}}>
                {children}
            </div>
        </>
    )
}
