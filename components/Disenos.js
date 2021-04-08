import Link from 'next/link';
import Image from 'next/image';
import BotonContacto from '../components/BotonContacto';
import styles from '../styles/Disenios.module.scss'

const Disenios = () => {

    
    
    return(
        <section id="Disenios" className={ styles.disenios_container }>
            <div className="site-wrap">
                <div className={ styles.disenios_text_wrap }>
                    <h2 className="site-title">Conoce nuestras propuestas de diseño</h2>
                    <p>Conozca los distintos planes y diseños arquitectónicos que tenemos como propuestas para su casa campestre, pensados para su comodidad, descanso y contacto con la naturaleza nativa de La Vega, Cundinamarca.</p>
                    <div className="btn-container block-columns">
                        <Link
                            href="#Recreacion"
                        >
                            <a className="btn btn-rojo">Quiero ver las zonas de recreación</a>
                        </Link>
                        <BotonContacto />
                    </div>
                </div>
                <div className="block-columns has-3-columns">
                    <div className="block-column">
                        <Image 
                            src="/images/plano.jpg"
                            alt="Diseño 1 para las casas del condominio Sinfonía del Río Tabacal"
                            height={543}
                            width={647}
                        />
                    </div>
                    <div className="block-column">
                    <Image 
                            src="/images/plano.jpg"
                            alt="Diseño 2 para las casas del condominio Sinfonía del Río Tabacal"
                            height={543}
                            width={647}
                        />
                    </div>
                    <div className="block-column">
                        <Image 
                            src="/images/plano.jpg"
                            alt="Diseño 3 para las casas del condominio Sinfonía del Río Tabacal"
                            height={543}
                            width={647}
                        />
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Disenios;