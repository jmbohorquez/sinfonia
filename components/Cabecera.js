import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

import CabeceraSlideFotos from '../components/CabeceraSlideFotos';
import CabeceraSlideVideos from '../components/CabeceraSlideVideos';
import Redes from '../components/Redes';
import BotonContacto from '../components/BotonContacto';
import styles from '../styles/Cabecera.module.scss';

const Cabecera = () => {
    
    const isPhonePortrait = useMediaQuery({ maxDeviceWidth: 414, orientation: 'portrait' });
    const isPhoneLandscape = useMediaQuery({ maxDeviceWidth: 812, orientation: 'landscape' });
    const isVideoCompatible = useMediaQuery({ minDeviceWidth: 768 });
    
    return(
        <section className={ `${ styles.cabecera } banner-container panel` }>
            {
                ( isPhonePortrait || isPhoneLandscape ) ? <CabeceraSlideFotos /> : <CabeceraSlideVideos />
            }
            <div className="banner-text-container">
                <div className={ `${ styles.site_wrap } site-wrap` }>
                    <div className={ styles.cabecera_text_container }>
                        <Redes />
                        <h1 className="site-title">Condominio campestre sinfonía, La Vega, Cundinamarca</h1>
                        <p className={ styles.cabecera_descripcion }>Vive un ambiente natural a 50 minutos de Bogotá…</p>
                        <div className="btn-container block-columns">
                            <Link
                                href="#Proyecto"
                            >
                                <a className="btn btn-rojo">Quiero saber más</a>
                            </Link>
                            <BotonContacto />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Cabecera;