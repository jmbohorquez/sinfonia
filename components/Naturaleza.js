import Link from 'next/link';
import NaturalezaSlider from './NaturalezaSlider';
import styles from '../styles/Naturaleza.module.css'
import BotonContacto from '../components/BotonContacto';

const Naturaleza = () => {

    return(
        <section id="Naturaleza" className={ styles.container }>
            <div className="site-wrap">
                <div className="block-columns has-2-columns">
                    <div className={ `${ styles.text_container } block-column` }>
                        <h2 className="site-title">La naturaleza, tu mejor vecina</h2>
                        <p className={ styles.sub_titulo }>Disfruta del Río Tabacal</p>
                        <p>La fantasía de dormir arrullado por el sinfónico sonido del río, la paz de la naturaleza, el clima abrigador, la flora y fauna, junto a la cercanía con Bogotá hacen de éste un lugar ÚNICO para su merecido descanso.</p>
                        <div className={ `${ styles.botones_cta } btn-container block-columns` }>
                            <Link
                                href="#Ventajas"
                            >
                                <a className="btn btn-rojo">Quiero ver las ventajas</a>
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