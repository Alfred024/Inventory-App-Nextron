import NextLink from 'next/link';
import { AuthContext } from '../../context/auth';
import { useContext } from 'react';

export const Sidebar = () => {

    const { onLogout } = useContext(AuthContext);

    return (
        <aside>
            <div>
                <h3>Kenai.</h3>
            </div>

            <div className="items">
                <div className="items-1 hover">
                    <NextLink href="/">
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

                <div className="items-1 hover">
                    <NextLink href="profile">
                        <div>
                            <i className="fa-solid fa-user"></i>
                            Perfil
                        </div>

                    </NextLink>

                    <div onClick={onLogout}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        Salir
                    </div>

                </div>
            </div>
        </aside>
    )
}
