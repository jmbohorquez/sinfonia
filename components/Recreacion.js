import Image from 'next/image';
import Link from 'next/link';
import BotonContacto from '../components/BotonContacto';
import styles from '../styles/Recreacion.module.css'

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
                        <p>Un Condominio para Toda la Familia</p>
                    </div>
                    <div className="block-columns has-2-columns">
                        <div className="block-column">
                            <p>Espacio para todos que contará con: Gimnasio, Cancha de Tenis, Muro de Tenis, Kiosco, Baños, Parque Infantil, Sendero Ecológico, Río, Cascada, Quebradas, Piscina, Jacuzzi, Sauna, Turco, zona BBQ y Pesca Deportiva.</p>
                        </div>
                        <div className="block-column">
                            <p>Permita que los chicos disfruten de una sana diversión sin perturbar su paz o la de los demás; en un lugar especial del condominio. </p>
                        </div>
                    </div>
                    <div className={ `${ styles.botones_cta } btn-container block-columns` }>
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
    );

}

export default Recreacion;