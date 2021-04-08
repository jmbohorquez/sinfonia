import Image from 'next/image';
import styles from '../styles/Header.module.scss'

const Header = () => {

    return(
        <header className={ styles.header }>
            <div className="site-wrap">
                <Image 
                    src="/logo-b.png"
                    alt="Venta de lotes condominio Sinfonía del Río Tabacal"
                    height={65}
                    width={165}
                />
            </div>
        </header>
    );

}

export default Header;