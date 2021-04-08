import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import BotonContacto from '../components/BotonContacto';
import styles from '../styles/Proyecto.module.scss';

const Proyecto = () => {

    const is4kScreen = useMediaQuery({ minDeviceWidth: 2560 });
    
    return(
        <>
            <section id="Proyecto" className={ styles.proyecto_container }>
                <div className={ `${ styles.proyecto_inner } site-wrap` }>
                    <div className={ styles.proyecto_text_container }>
                        <h3>Condominio de casas blancas con techos coloniales, mediterráneos o mixtos en La Vega, cundinamarca</h3>
                        <p>Opciones de terrazas mirador que complementan la armonía arquitectónica del condominio y propician una experiencia de tranquilidad.</p>
                        <ul>
                            <li>Lotes desde 760m<sup>2</sup> hasta 2800m<sup>2</sup>.</li>
                            <li>Precios desde $350.000m<sup>2</sup>.</li>
                            <li>Casas separadas por 10m de distancia una de otra.</li>
                        </ul>
                    </div>
                    <div className={ styles.proyecto_image_container }>
                        {
                            is4kScreen
                            ?
                                <Image 
                                    src="/images/proyecto-condominio-sinfonia.jpg"
                                    alt="Vista general del proyecto Sinfonía del Río Tabacal"
                                    height={1024}
                                    width={1111}
                                />
                            :
                                <Image 
                                    src="/images/proyecto-condominio-sinfonia.jpg"
                                    alt="Vista general del proyecto Sinfonía del Río Tabacal"
                                    height={944}
                                    width={1024}
                                />
                        }
                    </div>
                </div>
            </section>
            <section className={ styles.proyecto_casa_container }>
                <Image 
                    src="/images/casa-proyecto-condominio-sinfonia.jpg"
                    alt="Casa del proyecto Sinfonía del Río Tabacal"
                    height={1920}
                    width={1080}
                    className="cover"
                />
                <div className={ styles.proyecto_casa_texto_container }>
                    <div className={ styles.proyecto_casa_texto_inner }>
                        <h3>Cada propietario tiene la libertad de construir a gusto propio respetando la normativa municipal y las establecidas por el condominio.</h3>
                        <div className="btn-container block-columns">
                            <Link
                                href="#Naturaleza"
                            >
                                <a className="btn btn-rojo">Quiero ver las zonas verdes</a>
                            </Link>
                            <BotonContacto />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Proyecto;