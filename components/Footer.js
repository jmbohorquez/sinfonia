import styles from '../styles/Footer.module.scss';

const Footer = () => {

    return(
        <>
            <footer id="Footer" className={ styles.footer }>
                <div className={ `${ styles.footer_inner } site-wrap` }>
                    <p>https://www.condominiocampestresinfonia.com/</p>
                </div>
            </footer>
            <script src="js/acciones.js"></script>
        </>
    );

}

export default Footer;