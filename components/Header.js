import Image from 'next/image';

const Header = () => {

    return(
        <header className="header">
            <div className="site-wrap wrap">
                <Image 
                    src="/logo.png"
                    alt="Venta de lotes condominio Sinfonía del Río Tabacal"
                    height={48}
                    width={122}
                />
                <div className="contact-wrap">
                    <p><strong>Contáctanos:</strong> +57 323 304 3793</p>
                </div>
            </div>
        </header>
    );

}

export default Header;