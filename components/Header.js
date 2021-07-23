import Image from 'next/image';
import styles from '../styles/Header.module.scss'

const Header = () => {

    return(
        <header className={ styles.header }>
            <div className={ `site-wrap ${ styles.wrap }` }>
                <Image 
                    src="/logo.png"
                    alt="Venta de lotes condominio Sinfonía del Río Tabacal"
                    height={48}
                    width={122}
                />
                <div className="contact-wrap">
                    <p>Contáctanos: +57 323 304 3793</p>
                </div>
            </div>
        </header>
    );

}

export default Header;