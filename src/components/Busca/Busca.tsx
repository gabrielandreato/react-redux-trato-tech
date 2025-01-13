import styles from './Busca.module.scss';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {mudarBusca, resetarBusca} from "../../store/reducers/busca";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function Busca () {
    const busca = useAppSelector(state => state.busca);
    const dispatch = useAppDispatch();

    const location = useLocation();

    useEffect(() => {
        dispatch(resetarBusca());
    }, [location.pathname, dispatch]);

    return (
        <div className={styles.busca}>
            <input
                className={styles.input}
                placeholder="Oque você procura ?"
                value={busca}
                onChange={event => dispatch(mudarBusca(event.target.value))}
            />
        </div>
    )
}