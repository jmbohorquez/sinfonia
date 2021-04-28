import Link from 'next/link';
import NaturalezaSlider from './NaturalezaSlider';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles/Naturaleza.module.scss'
import BotonContacto from '../components/BotonContacto';

const Naturaleza = () => {

    const isIpad = useMediaQuery({ maxDeviceWidth: 768 });
    
    return(
        <section id="Naturaleza" className={ styles.container }>
            <div className="site-wrap">
                <div className={ isIpad ? styles.inner_columns : "block-columns has-2-columns" }>
                    <div className={ `${ styles.text_container } block-column` }>
                        <h2 className="site-title">La naturaleza, tu mejor vecina</h2>
                        <p>La fantasía de dormir arrullado por el sonido sinfónico del Río, 3 quebradas y una cascada, rodeados de guaduales y de una relajante vegetación, su fauna y flora y el clima abrigador cerca a Bogotá, hace de este un lugar único para el descanso.</p>
                        <div className={ `${ styles.botones_cta } btn-container block-columns` }>
                            <Link
                                href="#Recreacion"
                            >
                                <a className="btn btn-rojo">Quiero ver las zonas de recreación</a>
                            </Link>
                            <BotonContacto />
                        </div>
                    </div>
                    <div className={ `${ styles.slider } block-column` }>
                        <NaturalezaSlider />
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Naturaleza;