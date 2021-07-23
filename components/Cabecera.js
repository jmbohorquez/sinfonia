import { useMediaQuery } from 'react-responsive';

import CabeceraSlideFotos from '../components/CabeceraSlideFotos';
import styles from '../styles/Cabecera.module.scss';

const Cabecera = () => {
    
    const isPhonePortrait = useMediaQuery({ maxDeviceWidth: 414, orientation: 'portrait' });
    const isPhoneLandscape = useMediaQuery({ maxDeviceWidth: 812, orientation: 'landscape' });
    
    return(
        <section className={ `${ styles.cabecera } banner-container panel` }>
            
            <CabeceraSlideFotos />
            
        </section>
    );

}

export default Cabecera;