import NextLink from 'next/link';

export const Sidebar = () => {
    return (
        <aside>
            <div>
                <h3>Kenai.</h3>
            </div>

            <div className="items">
                <div className="items-1 hover">
                    <NextLink href="home">
                        <div>
                            <i className="fa-solid fa-money-bill"></i>
                            Ventas
                        </div>
                    </NextLink>
                    <NextLink href="inventory">
                        <div>
                            <i className="fa-solid fa-box"></i>
                            Inventario
                        </div>
                    </NextLink>
                    <NextLink href="clients">
                        <div>
                            <i className="fa-solid fa-store"></i>
                            Clientes
                        </div>
                    </NextLink>
                </div>

                <div className="items-2 hover">
                    <NextLink href="profile">
                        <div>
                            <i className="fa-solid fa-user"></i>
                            Perfil
                        </div>

                    </NextLink>

                    <NextLink href="help">
                        <div>
                            <i className="fa-solid fa-user"></i>
                            Ayuda
                        </div>
                    </NextLink>
                </div>
            </div>
        </aside>
    )
}
