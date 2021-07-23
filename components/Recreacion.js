import Image from 'next/image';
import Link from 'next/link';

import Flecha from '../public/images/flecha.svg'

const Recreacion = () => {

    return(
        <section id="Recreacion" className="recreacion-container">
            <div className="image_bg_container">
                <Image 
                    src="/images/recreacion-condominio-sinfonia.jpg"
                    alt="Zonas de recreación del condominio campestre Sinfonía del Río Tabacal"
                    height={1920}
                    width={1080}
                    className="cover"
                />
            </div>
            <div className="recreacion-text_container">
                <div className="site-wrap">
                    <div className="recreacion-titulo_container">
                        <h2 className="site-title">Zonas de recreación</h2>
                    </div>
                    <div className="listas block-columns has-3-columns">
                        <div className="listas_container block-column">
                            <ul className="recreacion-listas">
                                <li>Piscina para adultos</li>
                                <li>Piscina para niños</li>
                                <li>Piscina natural del Río Tabacal</li>
                                <li>Jacuzzi</li>
                                <li>Sauna</li>
                                <li>Turco</li>
                                <li>Gimnasio</li>
                            </ul>
                        </div>
                        <div className="listas_container block-column">
                            <ul className="recreacion-listas">
                                <li>Gimnasio</li>
                                <li>Cancha de tenis</li>
                                <li>Muro de tenis</li>
                                <li>Kiosco rumbero</li>
                                <li>Parque infantil</li>
                                <li>Baños</li>
                                <li>45.000 m<sup>2</sup> de reserva forestal.</li>
                            </ul>
                        </div>
                        <div className="listas_container block-column">
                            <ul className="recreacion-listas">
                                <li>1225 metros de playa de Río Tabacal</li>
                                <li>Quebrada</li>
                                <li>Cascada</li>
                                <li>BBQ</li>
                                <li>Pesca deportiva</li>
                                <li>Sendero ecológico</li>
                            </ul>
                        </div>
                    </div>
                    <div className="botones_cta btn-container recreacion-btn">
                        <Link
                            href="#Contacto"
                        >
                            <a className="btn btn-rojo"><Flecha /></a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Recreacion;