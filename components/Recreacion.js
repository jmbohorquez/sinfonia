import Image from 'next/image';
import Link from 'next/link';
import BotonContacto from '../components/BotonContacto';
import styles from '../styles/Recreacion.module.scss'

const Recreacion = () => {

    return(
        <section id="Recreacion" className={ styles.container }>
            <div className={ styles.image_bg_container }>
                <Image 
                    src="/images/recreacion-condominio-sinfonia.jpg"
                    alt="Zonas de recreación del condominio campestre Sinfonía del Río Tabacal"
                    height={1920}
                    width={1080}
                    className="cover"
                />
            </div>
            <div className={ styles.text_container }>
                <div className="site-wrap">
                    <div className={ styles.titulo_container }>
                        <h2 className="site-title">Zonas de recreación</h2>
                        <p>Un Condominio Campestre en La Vega, Cundinamarca,  para toda la familia que cuenta con:</p>
                    </div>
                    <div className={ `${ styles.listas } block-columns has-3-columns` }>
                        <div className={ `${ styles.listas_container } block-column` }>
                            <ul className={ styles.lista }>
                                <li>Piscina para adultos</li>
                                <li>Piscina para niños</li>
                                <li>Jacuzzi</li>
                                <li>Sauna</li>
                                <li>Turco</li>
                                <li>Gimnasio</li>
                            </ul>
                        </div>
                        <div className={ `${ styles.listas_container } block-column` }>
                            <ul className={ styles.lista }>
                                <li>Cancha de tenis</li>
                                <li>Muro de tenis</li>
                                <li>Kiosco</li>
                                <li>Parque infantil</li>
                                <li>Baños</li>
                                <li>1 km de río con sus playas</li>
                            </ul>
                        </div>
                        <div className={ `${ styles.listas_container } block-column` }>
                            <ul className={ styles.lista }>
                                <li>3 quebradas</li>
                                <li>Cascada</li>
                                <li>BBQ</li>
                                <li>Pesca deportiva</li>
                                <li>Sendero ecológico</li>
                            </ul>
                        </div>
                    </div>
                    <div className={ `${ styles.botones_cta } btn-container block-columns` }>
                        <Link
                            href="#Ventajas"
                        >
                            <a className="btn btn-rojo">Quiero ver las ventajas</a>
                        </Link>
                        <BotonContacto />
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Recreacion;