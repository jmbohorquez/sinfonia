import { useMediaQuery } from 'react-responsive';
import styles from '../styles/BotonesFlotantes.module.scss'

import Mobile from '../public/images/mobile.svg'
import Sobre from '../public/images/sobre.svg'
import Whatsapp from '../public/images/whatsapp.svg'

const BotonesFlotantes = () => {

    const isPhone = useMediaQuery({ maxDeviceWidth: 414 });

    const abrirContacto = () => {

        const panel = document.getElementById('Contacto');
        panel.style.display = 'block';

    }
    
    return(
        <div className={ `${ styles.container } block-columns` }>
            <a
                href="https://api.whatsapp.com/send?phone=+3142557787&text=Hola,%20Quiero%20más%20información"
                className={ styles.btn }
            >
                    <Whatsapp />
                <span>Agenda tu cita</span>
            </a>
            { ! isPhone &&
                <a 
                    href="#Contacto" 
                    className={ styles.btn }
                    onClick={ () => abrirContacto() }
                >
                    <Sobre />
                    <span>Contáctanos</span>
                </a>
            }
            { isPhone && 
                <a 
                    href="tel:3143539398" 
                    className={ styles.btn }>
                        <Mobile />
                    <span>Hablemos</span>
                </a>
            }
        </div>
    );

}

export default BotonesFlotantes;