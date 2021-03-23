import Link from 'next/link';
import Redes from '../components/Redes';
import BotonContacto from '../components/BotonContacto';
import styles from '../styles/Cabecera.module.css';

const Cabecera = () => {
    
    return(
        <section className="banner-container cabecera panel">
            <div className={ `banner-image-container ${ styles.cabecera_image_container } video-cover` }>
                <div id="video-container-1" className={ styles.video_wrap }>
                    <video
                        src="videos/cabecera-1.mp4"
                        width="1920" 
                        height="1080"
                        className="cover"
                        id="video-1"
                    ></video>
                </div>
                <div id="video-container-2" className={ styles.video_wrap }>
                    <video
                        src="videos/cabecera-2.mp4"
                        width="1920" 
                        height="1080"
                        className="cover"
                        id="video-2"
                    ></video>
                </div>
            </div>
            <div className="banner-text-container">
                <div className="site-wrap">
                    <div className={ styles.cabecera_text_container }>
                        <Redes />
                        <h1 className="site-title">Casas modernas con estilo colonial</h1>
                        <p className={ styles.cabecera_descripcion }>Vive un ambiente natural a una hora y media de Bogotá…</p>
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