import Image from 'next/image';

import Galeria from '../components/GaleriaFotos'

const Contacto = () => {
    
    return(
        <section id="Contacto" className="contacto-container">
            <div className="site-wrap">
                <h2 className="site-title">Contáctanos</h2>
                <div className="block-columns has-3-columns">
                    <div className="block-column">
                        <p><strong>Teléfono:</strong> +57 323 304 3793<br />
                        <strong>Email:</strong> condominiosinfonia62@gmail.com</p>
                        <Image 
                            src="/logo-b.png"
                            alt="Venta de lotes condominio Sinfonía del Río Tabacal"
                            height={65}
                            width={165}
                        />
                    </div>
                    <div className="block-column">
                        <iframe 
                            height="602" 
                            allowtransparency="true" 
                            scrolling="no" 
                            frameBorder="0" 
                            
                            src="https://www.i180.co/machform/embed.php?id=18638" 
                            title="Condominio Sinfonía"><a href="https://www.i180.co/machform/view.php?id=18638" title="Condominio Sinfonía">Condominio Sinfonía</a></iframe>
                    </div>
                    <div className="block-column">
                        <Galeria />
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Contacto;