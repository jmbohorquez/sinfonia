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
                    <div className="block-column form-contact">
                        <iframe 
                            src="https://docs.google.com/forms/d/e/1FAIpQLScNEKfxzyWpOn5J7GwUhVhiYkQ6E6L5sxao14hzQc3m0ejeSA/viewform?embedded=true" 
                            width="640" 
                            height="808" 
                            frameBorder="0" 
                            marginHeight="0" 
                            marginWidth="0"
                        >Cargando…</iframe>
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