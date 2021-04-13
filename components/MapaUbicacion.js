import Link from 'next/link';
import styles from '../styles/Mapa.module.scss';

const MapaUbicacion = () => {

    return(
        <div className={ styles.contenedor }>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2859.6081765593694!2d-74.32224884877672!3d5.002461366625355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4085d11ef6714d%3A0x658a5a5ab63b96e1!2sCondominio%20Campestre%20Sinfonia%20del%20Rio%20Tabacal!5e0!3m2!1ses!2sco!4v1617750950794!5m2!1ses!2sco" 
                width="600" 
                height="450" 
                loading="lazy"
            ></iframe>
            <div className={ `${ styles.contenedor_botones } btn-container block-columns` }>
                <Link
                    href="https://goo.gl/maps/GmdvoPj1hZpvWDW46"
                ><a className={ `${ styles.mapa_btn } btn btn-rojo` }>Llegar con Google maps</a></Link>
                <Link
                    href="https://www.waze.com/live-map/directions/colombia/cundinamarca/condominio-campestre-sinfonia-del-rio-tabacal?utm_source=waze_website&utm_medium=lm_share_directions&utm_campaign=iframe+module&to=place.ChIJTXH2HtGFQI4R4ZY7tlpaimU&from=place.EixTaWJlcmlhLUZ1bnphLCBGdW56YSwgQ3VuZGluYW1hcmNhLCBDb2xvbWJpYSIuKiwKFAoSCWHKscUBgz-OESCTngIu9QrCEhQKEgnDmoG_qII_jhF-rjfIAWmU0w"
                ><a className={ `${ styles.mapa_btn } btn btn-rojo` }>Llegar con Waze</a></Link>
            </div>
        </div>
    );

}

export default MapaUbicacion;