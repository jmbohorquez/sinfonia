import Redes from '../components/Redes';
import styles from '../styles/Footer.module.css'

const Footer = () => {

    return(
        <>
            <footer className={ styles.footer }>
                <div className={ `${ styles.footer_inner } site-wrap` }>
                    <p>https://www.condominiocampestresinfonia.com/</p>
                    <Redes />
                </div>
            </footer>
            <script src="js/acciones.js"></script>
        </>
    );

}

export default Footer;