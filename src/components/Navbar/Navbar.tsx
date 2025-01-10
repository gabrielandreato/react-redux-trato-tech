import React from "react";
import styles from './Navbar.module.scss';
import {ReactComponent as Logo} from "../../assets/logo.svg";
import classNames from "classnames";
import {
    RiShoppingCart2Line,
    RiShoppingCartFill
} from 'react-icons/ri';
import Busca from "../Busca/Busca";
import {Link, useNavigate} from "react-router-dom";

const iconProps = {
    color: 'white',
    size: 24
}

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className={styles.nav}>
            <Logo className={styles.logo}/>
            <div className={styles.links}>
                <div>
                    <Link to="/" onClick={() => navigate("/")} className={classNames(styles.link, {
                        [styles.selected]: window.location.hostname === '/'
                    })}>
                        Página Inicial
                    </Link>
                </div>
            </div>
            <div className={styles.busca}>
                <Busca />
            </div>
            <div className={styles.icones}>
                <Link to={"/carrinho"}>
                    {
                        window.location.pathname === "/carrinho"
                            ? <RiShoppingCartFill {...iconProps} />
                            : <RiShoppingCart2Line {...iconProps}/>
                    }

                </Link>
            </div>
        </nav>
    )
}