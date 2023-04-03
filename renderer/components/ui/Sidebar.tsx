import NextLink from 'next/link';

export const Sidebar = () => {
    return (
        <aside>
            <div>
                <NextLink href="home">
                    <i className="fa-solid fa-money-bill"></i>
                </NextLink>
                <NextLink href="inventory">
                    <i className="fa-solid fa-box"></i>
                </NextLink>
                <NextLink href="clients">
                    <i className="fa-solid fa-store"></i>
                </NextLink>
            </div>
            <hr />
            <div>
                <NextLink href="profile">
                    <i className="fa-solid fa-user"></i>
                </NextLink>
            </div>
        </aside>
    )
}
