import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import VideosNaturaleza from './VideosNaturaleza';
import BotonContacto from '../components/BotonContacto';
import styles from '../styles/Proyecto.module.scss';

const Proyecto = () => {

    const is4kScreen = useMediaQuery({ minDeviceWidth: 2560 });
    
    return(
        <>
            <section id="Proyecto" className={ styles.proyecto_container }>
                <div className={ `${ styles.proyecto_inner } site-wrap` }>
                    <div className={ styles.proyecto_text_container }>
                        <p>A  53 ½ Kms de Bogotá, altitud 1.100 metros snm, clima ideal del ser humano con 24 grados centígrados en promedio en el día y fresco en la noche, lo que evita el uso de aires acondicionados.</p>
                        <ul>
                            <li>Casas separadas por lo menos 10 m de distancia una de otra en un ambiente ecológico y construidas a su gusto</li>
                            <li>62 Lotes desde 617 m<sup>2</sup>  hasta 2777 m<sup>2</sup>.( planos, semiplanos, montañosos)</li>
                            <li>40% de lotes vendidos, 60% en venta</li>
                            <li>4 casas habitadas</li>
                            <li>6 casas en construcción</li>
                            <li>Zona Social a terminarse en Julio</li>
                            <li>Actualmente disponibles lotes desde 760 m2</li>
                            <li>Precios desde $350.000 m<sup>2</sup></li>
                            <li>Área total del Condominio Campestre m<sup>2</sup></li>
                            <li>45.000 m<sup>2</sup> de reserva forestal</li>
                            <li>1 ¼ km de río, con playas disfrutables y rodeado de guaduales</li>
                            <li>2 km de carretera interna para  caminar</li>
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
            <VideosNaturaleza />
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
                        <h3>Cada propietario tiene la libertad de construir a gusto propio respetando la normativa municipal y las establecidas por el condominio (Pintura blanca en fachadas  y techos Coloniales con teja de barro o shingle o terraza o plancha.)</h3>
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