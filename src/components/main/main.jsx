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
import Reservaciones from "./reservaciones/reservaciones";
import Tableros from "./tableros/tableros";
import Mesas from "./mesas/mesas";
import Usuarios from "./usuarios/usuarios";
import Reportes from "./reportes/reportes";



export default function Main () {

const [ main, setMain ] = useState("");
const [ active, setActive ] = useState(true)
const [ indexing, setIndexing] = useState(undefined);

const handleBoard = (value, activeValue, indexValue ) => {
    setMain(value)
    setActive(activeValue)
    setIndexing(indexValue)
}; 
    const modeOne = styles.containerWith
    const modeTwo = styles.container
    const classNameSelected = styles.selectedItem

    return(
        <section className={style.container}>
            <div>
            <aside className={styles.aside}>
            <div className={styles.sectionOne}>
                <div className={modeTwo} onClick={() => handleBoard("dashboard", false)}>
                    <img src={dashboard} className={styles.icon} alt="dashboard-icon" />
                    <span>Dashboard</span>
                </div>
                <div className={indexing === 1 ? modeOne : classNameSelected}  onClick={() => handleBoard("catalogo", !active, 1)}>
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
                <div className={indexing === 2 ? modeOne : classNameSelected} onClick={() => handleBoard("ventas", false, 2)}>
                    <div>
                        <img src={ventas} className={styles.icon} alt="ventas-icon" />
                        <span>Ventas</span>
                    </div>
                    <img src={arrow} className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={modeTwo} onClick={() => handleBoard("ventaTypes", false)}>
                    <img src={ventasType} className={styles.icon} alt="tipos-de-venta" />
                    <span>Tipos de venta</span>
                </div>
                <div className={indexing === 4 ? modeOne : classNameSelected} onClick={() => handleBoard("promociones", false, 4)}>
                    <div>
                        <img src={promociones} className={styles.icon} alt="promociones" />
                        <span>Promociones</span>
                    </div>
                    <img src={arrow} className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={indexing === 5 ? modeOne : classNameSelected} onClick={() => handleBoard("caja", false, 5)}>
                    <div >
                        <img src={caja} className={styles.icon} alt="caja" />
                        <span>Caja</span>
                    </div>
                    <img src={arrow}  className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={modeTwo} onClick={() => handleBoard("reservaciones", false)}>
                    <img src={reservaciones} className={styles.icon} alt="reservaciones" />
                    <span>Reservaciones</span>
                </div>
                <div className={indexing === 7 ? modeOne : classNameSelected} onClick={() => handleBoard("tableros", false, 7)}>
                    <div >
                        <img src={tableros} className={styles.icon} alt="tableros" />
                        <span>Tableros</span>
                    </div>
                    <img src={arrow} className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={indexing === 8 ? modeOne : classNameSelected} onClick={() => handleBoard("usuarios", false, 8)}>
                    <div >
                        <img src={usuarios} className={styles.icon} alt="usuarios" />
                        <span>Usuarios</span>
                    </div>
                    <img src={arrow} className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={indexing === 9 ? modeOne : classNameSelected} onClick={() => handleBoard("mesas", false, 9)}>
                    <div >
                        <img src={mesas} className={styles.icon} alt="mesas" />
                        <span>Mesas</span>
                    </div>
                    <img src={arrow} className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={modeTwo} onClick={() => handleBoard("reportes", false)}>
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
            { main === "reservaciones" && <Reservaciones/> }
            { main === "tableros" && <Tableros/> }
            { main === "usuarios" && <Usuarios/> }
            { main === "mesas" && <Mesas/> }
            { main === "reportes" && <Reportes/> }
        </section>
    )
}