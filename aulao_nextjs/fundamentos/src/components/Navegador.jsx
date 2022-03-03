import Link from "next/link";
import styles from '../styles/navegador.module.css'

export default function Navegasor(props){
    return(
        <Link href={props.destino}>
            <div className={styles.navegador}>
            {props.texto}
            </div>
            
        </Link>
    )
}