import { useState } from "react"

import Dashboard from "./dashboard/dashboard";
import style from "./main.module.css"
import Catalogo from "./catalogo/catalogo";

import dashboard from "../../assets/dashboard/dashboard.png"
import arrow from "../../assets/dashboard/arrow.png"
import catalogo from "../../assets/dashboard/catalogo.png"
import ventas from "../../assets/dashboard/ventas.png"
import ventasType from "../../assets/dashboard/ventaType.png"
import promociones from "../../assets/dashboard/promociones.png"
import caja from "../../assets/dashboard/caja.png"
import reservaciones from "../../assets/dashboard/reservaciones.png"
import tableros from "../../assets/dashboard/tableros.png"
import usuarios from "../../assets/dashboard/usuarios.png"
import mesas from "../../assets/dashboard/mesas.png"
import reportes from "../../assets/dashboard/reportes.png"
import divider from "../../assets/dashboard/divider.png"
import config from "../../assets/dashboard/config.png"
import ayuda from "../../assets/dashboard/ayuda.png"

import styles from "../aside/aside.module.css"
import styling from "./main.module.css"
import Ventas from "./ventas/ventas";
import VentaTypes from "./ventaTypes/ventaTypes";
import Promociones from "./promociones/promociones";
import Caja from "./caja/caja";



export default function Main () {

const [ main, setMain ] = useState("");
const [ active, setActive ] = useState(true)

const handleBoard = (value, activeValue) => {
    setMain(value)
    setActive(activeValue)
   
}; 

    return(
        <section className={style.container}>
            <div>
            <aside className={styles.aside}>
            <div className={styles.sectionOne}>
                <div className={styles.container} onClick={() => handleBoard("dashboard", false)}>
                    <img src={dashboard} className={styles.icon} alt="dashboard-icon" />
                    <span>Dashboard</span>
                </div>
                <div className={styles.containerWith}  onClick={() => handleBoard("catalogo", !active)}>
                    <div className={styles.iconContainer}>
                        <img src={catalogo}  className={styles.icon} alt="catalogo-icon" />
                        <span >Catalogo</span>
                    </div>
                    <img src={arrow}  className={styles.arrowIcon} alt="icon" />
                </div>
                {
                    main === "catalogo" && active === true ? 
                    <div className={styling.deployContainer}>
                        <span className={styling.deployItem}> categorias </span>
                        <span className={styling.deployItem}> Productos y precios </span>
                        <span className={styling.deployItem}> Complementos </span>
                        <span className={styling.deployItem}> Modificaciones </span>
                        <span className={styling.deployItem}> Menus y recetas </span>
                    </div> : null
                } 
                <div className={styles.containerWith} onClick={() => handleBoard("ventas", false)}>
                    <div>
                        <img src={ventas} className={styles.icon} alt="ventas-icon" />
                        <span>Ventas</span>
                    </div>
                    <img src={arrow} className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={styles.container} onClick={() => handleBoard("ventaTypes", false)}>
                    <img src={ventasType} className={styles.icon} alt="tipos-de-venta" />
                    <span>Tipos de venta</span>
                </div>
                <div className={styles.containerWith} onClick={() => handleBoard("promociones", false)}>
                    <div>
                        <img src={promociones} className={styles.icon} alt="promociones" />
                        <span>Promociones</span>
                    </div>
                    <img src={arrow} className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={styles.containerWith} onClick={() => handleBoard("caja", false)}>
                    <div >
                        <img src={caja} className={styles.icon} alt="caja" />
                        <span>Caja</span>
                    </div>
                    <img src={arrow}  className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={styles.container}>
                    <img src={reservaciones} className={styles.icon} alt="reservaciones" />
                    <span>Reservaciones</span>
                </div>
                <div className={styles.containerWith}>
                    <div >
                        <img src={tableros} className={styles.icon} alt="tableros" />
                        <span>Tableros</span>
                    </div>
                    <img src={arrow} className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={styles.containerWith}>
                    <div >
                        <img src={usuarios} className={styles.icon} alt="usuarios" />
                        <span>Usuarios</span>
                    </div>
                    <img src={arrow} className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={styles.containerWith}>
                    <div >
                        <img src={mesas} className={styles.icon} alt="mesas" />
                        <span>Mesas</span>
                    </div>
                    <img src={arrow} className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={styles.container}>
                    <img src={reportes} className={styles.icon} alt="reportes" />
                    <span>Reportes</span>
                </div>
            </div>
            <img src={divider} className={styles.icon} alt="icon" />
            <div className={styles.sectionTwo}>
                <div>
                    <img src={config} className={styles.icon} alt="configuraciones" />
                    <span>Configuracion</span>
                </div>
                <div>
                    <img src={ayuda} alt="ayuda" />
                    <span>Ayuda</span>
                </div>
            </div>
        </aside>
            </div>
            { main === "dashboard" && <Dashboard/> }
            { main === "catalogo" && <Catalogo/> }
            { main === "ventas" && <Ventas/> }
            { main === "ventaTypes" && <VentaTypes/> }
            { main === "promociones" && <Promociones/> }
            { main === "caja" && <Caja/> }

        </section>
    )
}