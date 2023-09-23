import styles from "./header.module.css"
import notification from "../../assets/header/notificacion.png"
import arrow from "../../assets/header/arrow.png"
import logo from "../../assets/header/tomateLogo.png"
import search from "../../assets/header/search.png"
import avatar from "../../assets/header/avatar.png"


export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} className={styles.tomateLogo} alt="tomate-logo" />
            </div>
            <div className={styles.right}>
                <div className={styles.input}>
                    <img src={search} className={styles.searchIcon} alt="" />
                    <input type="search" className={styles.search} placeholder="Buscar modulo"/>      
                </div>
                    <img src={notification}  className={styles.noti} alt="notificacion" />
                    <span> Moises Baldenegro </span>
                    <img src={arrow} alt="vector" />
                    
                <div className={styles.perfil}>
                    <img src={avatar} className={styles.avatar} alt="" />
                     
            </div>
        </div>
        </header>
    )
}