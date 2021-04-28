import Image from 'next/image';
import styles from '../styles/Contacto.module.scss';

const Contacto = () => {
    
    return(
        <section id="Contacto" className={ styles.container }>
            <div className="site-wrap">
                <h2 className="site-title">Contáctanos</h2>
                <div className="block-columns has-3-columns">
                    <div className="block-column">
                        <Image 
                            src="/logo-b.png"
                            alt="Venta de lotes condominio Sinfonía del Río Tabacal"
                            height={65}
                            width={165}
                        />
                        <p><strong>Visitas:</strong><br />
                        De lunes a domingo <br />
                        7:00 am a 5:00 pm</p>
                    </div>
                    <div className="block-column">
                        <p><strong>Teléfono:</strong> 314 255 7787<br />
                        <strong>Teléfono:</strong> 311 829 6853<br />
                        <strong>Teléfono:</strong> 310 790 4156<br />
                        <strong>Email:</strong> condominiosinfonia62@gmail.com<br />
                        <strong>Instagram:</strong> <a href="https://www.instagram.com/sinfoniacondominio/" target="_blank">/sinfoniacondominio</a><br />
                        <strong>Facebook:</strong> <a href="https://www.facebook.com/Sinfonia-Condominio-Campestre-112864846935011/" target="_blank">/Sinfonia-Condominio-Campestre</a></p>
                    </div>
                    <div className="block-column">
                        <iframe 
                            onLoad="javascript:parent.scrollTo(0,0);" 
                            height="602" 
                            allowtransparency="true" 
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