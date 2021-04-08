import Image from 'next/image';
import styles from '../styles/Contacto.module.scss';

const Contacto = () => {

    const cerrarContacto = () => {

        const panel = document.getElementById('Contacto');
        panel.style.display = 'none';

    }
    
    return(
        <section id="Contacto" className={ styles.container }>
            <div className="site-wrap">
                <div className={ styles.cierre }>
                    <a 
                        href="#!"
                        onClick={ () => cerrarContacto() }
                    >&#215;</a>
                </div>
                <h2 className="site-title">Contáctanos</h2>
                <div className="block-columns has-3-columns">
                    <div className="block-column">
                        <Image 
                            src="/logo.png"
                            alt="Venta de lotes condominio Sinfonía del Río Tabacal"
                            height={65}
                            width={165}
                        />
                    </div>
                    <div className="block-column">
                        <p><strong>Teléfono:</strong> 314 255 7787<br />
                        <strong>Email:</strong> info@sinfonia.com<br />
                        <strong>Instagram:</strong> <a href="https://www.instagram.com/sinfoniacondominio/" target="_blank">/sinfoniacondominio</a><br />
                        <strong>Facebook:</strong> <a href="https://www.facebook.com/Sinfonia-Condominio-Campestre-112864846935011/" target="_blank">/Sinfonia-Condominio-Campestre</a></p>
                    </div>
                    <div className="block-column">
                        <iframe 
                            onload="javascript:parent.scrollTo(0,0);" 
                            height="602" 
                            allowTransparency="true" 
                            scrolling="no" 
                            frameBorder="0" 
                            
                            src="https://www.i180.co/machform/embed.php?id=18638" 
                            title="Condominio Sinfonía"><a href="https://www.i180.co/machform/view.php?id=18638" title="Condominio Sinfonía">Condominio Sinfonía</a></iframe>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Contacto;