import NaturalezaSlider from './NaturalezaSlider';
import { useMediaQuery } from 'react-responsive';

const Naturaleza = () => {
    
    return(
        <section id="Naturaleza" className="naturaleza-container">
            <NaturalezaSlider />
            <div className="site-wrap">
                <div className="text_container">
                    <h2 className="site-title">La naturaleza... tu mejor vecina</h2>
                    <p>Disfruta de la fantasía de VIVIR arrullado por la SINFONIA DEL RIO TABACAL.</p>
                    <p>El murmullo  del rio, el canto de las aves y el verde de sus espacios te llevaran a vivir en el lugar soñado rodeado de naturaleza pura. </p>
                </div>
            </div>
        </section>
    );

}

export default Naturaleza;