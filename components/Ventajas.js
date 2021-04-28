import Link from 'next/link';
import BotonContacto from '../components/BotonContacto';
import styles from '../styles/Ventajas.module.scss'

const Ventajas = () => {

    return(
        <section id="Ventajas" className={ styles.container }>
            <div className="site-wrap">
                <h2 className="site-title">Servicios</h2>
                <div className="site-wrap">
                    <p className="text-center">Energía eléctrica de Codensa, servicio de agua de acueducto veredal, internet satelital. Planta de tratamiento de aguas residuales.</p>
                    <div className={ `${ styles.contenedor_botones } btn-container block-columns` }>
                        <Link
                            href="https://goo.gl/maps/GmdvoPj1hZpvWDW46"
                        ><a className={ `${ styles.mapa_btn } btn btn-rojo` }>Llegar con Google maps</a></Link>
                        <Link
                            href="https://www.waze.com/live-map/directions/colombia/cundinamarca/condominio-campestre-sinfonia-del-rio-tabacal?utm_source=waze_website&utm_medium=lm_share_directions&utm_campaign=iframe+module&to=place.ChIJTXH2HtGFQI4R4ZY7tlpaimU&from=place.EixTaWJlcmlhLUZ1bnphLCBGdW56YSwgQ3VuZGluYW1hcmNhLCBDb2xvbWJpYSIuKiwKFAoSCWHKscUBgz-OESCTngIu9QrCEhQKEgnDmoG_qII_jhF-rjfIAWmU0w"
                        ><a className={ `${ styles.mapa_btn } btn btn-rojo` }>Llegar con Waze</a></Link>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Ventajas;