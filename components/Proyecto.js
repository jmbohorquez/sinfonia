import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import BotonContacto from '../components/BotonContacto';

import Precio from '../public/images/precio.svg'
import Altura from '../public/images/mountain.svg'
import Distancia from '../public/images/distancia.svg'

import GoogleMaps from '../public/images/google-maps.svg'
import Waze from '../public/images/waze.svg'

const Proyecto = () => {

    const is4kScreen = useMediaQuery({ minDeviceWidth: 2560 });
    
    return(
        <>
            <section id="Proyecto" className="proyecto_container">
                <div className="site-wrap proyecto_inner">
                    <div className="proyecto_text_container">
                        <div className="col">
                            <Precio />
                            <p>Lotes desde <strong>$266.700.000</strong></p>
                        </div>
                        <div className="col">
                            <Distancia />
                            <p><strong>A 51.5 Kms</strong> de Bogotá</p>
                        </div>
                        <div className="col">
                            <Altura />
                            <p>Altitud <strong>1000 msndm</strong></p>
                        </div>
                    </div>
                    <div className="proyecto-caracteristicas-wrap">
                        <div className="lista">
                            <ul>
                                <li>33 Lotes desde 762 m<sup>2</sup>  hasta 2777 m<sup>2</sup></li>
                                <li>Área total del Condominio Campestre 166.676 m<sup>2</sup></li>
                                <li>45.000 m<sup>2</sup> de reserva forestal</li>
                                <li>1225 metros de playa de Rio Tabacal</li>
                                <li>2km de vías internas</li>
                                <li>Espacios para observación de aves, montañismo, senderismo y pesca</li>
                            </ul>
                        </div>
                        <div className="botones">
                            <Link
                                href="https://goo.gl/maps/GmdvoPj1hZpvWDW46"
                            >
                                <a className="btn-map google-maps" target="_blank">
                                    <span className="icon"><GoogleMaps /></span>
                                    <span className="text">Llegar con Google Maps</span>
                                </a>
                            </Link>
                            <Link
                                href="https://www.waze.com/live-map/directions/colombia/cundinamarca/condominio-campestre-sinfonia-del-rio-tabacal?utm_source=waze_website&utm_medium=lm_share_directions&utm_campaign=iframe+module&to=place.ChIJTXH2HtGFQI4R4ZY7tlpaimU&from=place.EixTaWJlcmlhLUZ1bnphLCBGdW56YSwgQ3VuZGluYW1hcmNhLCBDb2xvbWJpYSIuKiwKFAoSCWHKscUBgz-OESCTngIu9QrCEhQKEgnDmoG_qII_jhF-rjfIAWmU0w"
                            >
                                <a className="btn-map waze" target="_blank">
                                    <span className="icon"><Waze /></span>
                                    <span className="text">Llegar con Waze</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Proyecto;