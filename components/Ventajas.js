import Link from 'next/link';
import styles from '../styles/Ventajas.module.css'

const Ventajas = () => {

    return(
        <section id="Ventajas" className={ styles.container }>
            <div className="site-wrap">
                <h2 className="site-title">Algunas de nuestras ventajas</h2>
                <div className="block-columns has-3-columns">
                    <div className={ `${ styles.columna } block-column` }>
                        <svg viewBox="10 30 180 140.001" height="200" width="200" xmlns="http://www.w3.org/2000/svg" >
                            <g>
                                <path d="M69.08 80.418v33.124c0 2.013-1.636 4.209-3.636 4.209s-3.636-2.196-3.636-4.209V80.418c0-5.765-4.999-10.157-10.907-10.157H27.997c-5.908 0-10.725 4.392-10.725 10.157v31.935c0 2.013-1.636 4.575-3.636 4.575S10 114.366 10 112.353V80.327c0-9.791 8.089-17.386 17.997-17.386h22.905c9.998 0 18.178 7.686 18.178 17.477zm-12.725 9.974c0-2.013-1.636-3.66-3.636-3.66s-3.636 1.647-3.636 3.66v31.111H29.996V90.392c0-2.013-1.636-3.66-3.636-3.66s-3.636 1.647-3.636 3.66v74.118c0 2.013 1.636 3.66 3.636 3.66s3.636-1.647 3.636-3.66v-35.686h19.088v35.686c0 2.013 1.454 3.66 3.454 3.66s3.818-1.647 3.818-3.66V90.392zM24.452 45.098C24.452 36.771 31.178 30 39.449 30s14.997 6.771 14.997 15.098-6.726 15.098-14.997 15.098c-8.271-.091-14.997-6.863-14.997-15.098zm7.271 0c0 4.301 3.454 7.778 7.726 7.778s7.726-3.477 7.726-7.778-3.454-7.778-7.726-7.778-7.726 3.477-7.726 7.778zm57.354 87.386c-2 0-3.636 1.739-3.636 3.752v30.105c0 2.013 1.636 3.66 3.636 3.66s3.636-1.647 3.636-3.66v-30.105c0-2.014-1.637-3.752-3.636-3.752zm16.361 0c-2 0-3.636 1.647-3.636 3.66v30.196c0 2.013 1.636 3.66 3.636 3.66s3.636-1.647 3.636-3.66v-30.196c-.001-2.013-1.637-3.66-3.636-3.66zM84.987 98.17c0-6.863 5.544-12.353 12.271-12.353 6.726 0 12.271 5.49 12.271 12.353 0 6.863-5.544 12.353-12.271 12.353-6.727 0-12.271-5.582-12.271-12.353zm7.271 0c0 2.745 2.272 5.033 4.999 5.033a5.001 5.001 0 0 0 4.999-5.033c0-2.837-2.181-5.033-4.999-5.033-2.817 0-4.999 2.196-4.999 5.033zm28.589 30.631l-1.33-5.178c-2.128-6.963-6.562-10.355-11.971-10.355H87.15c-5.409 0-9.932 3.303-11.971 10.355l-5.143 17.676c-.532 1.875.443 3.839 2.394 4.464.355.089.709.179 1.064.179 1.507 0 2.926-.982 3.37-2.5.177-.625 4.7-15.533 5.498-18.479.532-2.053 2.572-4.374 5.143-4.374h19.509c2.572 0 4.789 2.41 5.321 4.374.798 2.946 5.321 17.854 5.498 18.479.443 1.518 1.862 2.5 3.37 2.5.355 0 .709-.089 1.064-.179 1.862-.536 2.926-2.589 2.394-4.464-.089-.089-2.129-7.052-3.814-12.498zm21.039-83.703c0-8.327 6.726-15.098 14.997-15.098s14.997 6.771 14.997 15.098-6.726 15.098-14.997 15.098c-8.271-.091-14.997-6.863-14.997-15.098zm7.271 0c0 4.301 3.454 7.778 7.726 7.778s7.726-3.477 7.726-7.778-3.454-7.778-7.726-7.778-7.726 3.477-7.726 7.778zm40.828 67.74l-3.611-32.719c-.09-9.634-8.125-17.178-17.876-17.178h-23.136c-9.837 0-17.943 7.501-18.034 17.081l-3.643 32.534c-.182 1.988 1.184 3.796 3.188 3.976 2.004.181 3.825-1.175 4.007-3.163l3.643-32.715v-.361c0-5.694 4.827-10.031 10.747-10.031h23.043c5.92 0 10.747 4.338 10.747 10.031v.462l3.611 32.901c.181 1.818 1.806 3.272 3.611 3.272h.361c2.078-.273 3.522-2.09 3.342-4.09zm-16.56-22.72c-.273-2.013-2.181-3.386-4.181-3.111-2 .275-3.363 2.196-3.09 4.209l5.726 39.438h-29.995l5.817-39.438c.273-2.013-1.091-3.843-3.09-4.209-2-.275-3.818 1.098-4.181 3.111l-6.635 43.921c-.182 1.098.182 2.105.818 2.928.727.824 1.727 1.007 2.727 1.007h7.181v26.384c0 1.753 1.156 3.37 2.86 3.73 2.334.494 4.411-1.31 4.411-3.578v-26.536h9.998v26.284c0 1.814 1.208 3.48 2.974 3.836 2.351.474 4.297-1.325 4.297-3.584v-26.536h7.271c1.091 0 2.091-.183 2.727-1.007.727-.824 1-1.922.818-2.928l-6.453-43.921z" fill="#749E52" ></path>
                            </g>
                        </svg>
                        <p><strong>Una gran familia</strong></p>
                        <p>40% de los 62 lotes del proyecto ya se encuentran vendidos. </p>
                    </div>
                    <div className={ `${ styles.columna } block-column` }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="7.512745098039218 13.722549019607834 187.87450980392157 174.45490196078433">
                            <g>
                                <path d="M179 54l-61.9-35c-8.4-4.8-22.9-4.8-31.4 0L23.8 54c-4.7 2.7-7.3 6.4-7.3 10.6 0 4.1 2.6 7.9 7.3 10.5l61.9 35c4.2 2.4 9.8 3.7 15.7 3.7 5.9 0 11.5-1.3 15.7-3.7l61.9-35c4.7-2.7 7.3-6.4 7.3-10.5s-2.6-7.9-7.3-10.6zm-2.8 16.2l-61.9 35c-6.6 3.7-19.1 3.8-25.7 0l-61.9-35c-2.8-1.6-4.4-3.6-4.4-5.6 0-1.9 1.6-4 4.4-5.6l61.9-35c3.3-1.9 8-3 12.9-3 4.8 0 9.5 1.1 12.9 3l61.9 35c2.8 1.6 4.4 3.6 4.4 5.6-.1 1.9-1.7 4-4.5 5.6z" fill="#749E52"></path>
                                <path d="M179 90.7c-1.4-.8-3.1-.3-3.9 1.1-.8 1.4-.3 3.1 1.1 3.9 2.8 1.6 4.4 3.6 4.4 5.6s-1.6 4-4.4 5.6l-61.9 35c-7 3.9-18.7 3.9-25.7 0l-61.9-35c-2.8-1.6-4.4-3.6-4.4-5.6s1.6-4 4.4-5.6c1.4-.8 1.9-2.5 1.1-3.9-.8-1.4-2.5-1.9-3.9-1.1-4.7 2.7-7.3 6.4-7.3 10.6s2.6 7.9 7.3 10.6l61.9 35c4.4 2.5 10 3.7 15.7 3.7 5.6 0 11.3-1.2 15.7-3.7l61.9-35c4.7-2.7 7.3-6.4 7.3-10.6s-2.7-7.9-7.4-10.6z" fill="#749E52"></path>
                                <path d="M179 126.7c-1.4-.8-3.1-.3-3.9 1.1-.8 1.4-.3 3.1 1.1 3.9 2.8 1.6 4.4 3.6 4.4 5.6 0 1.9-1.6 4-4.4 5.6l-61.9 35c-7 3.9-18.7 3.9-25.7 0l-61.9-35c-2.8-1.6-4.4-3.6-4.4-5.6 0-1.9 1.6-4 4.4-5.6 1.4-.8 1.9-2.5 1.1-3.9-.8-1.4-2.5-1.9-3.9-1.1-4.7 2.7-7.3 6.4-7.3 10.5s2.6 7.9 7.3 10.6l61.9 35c4.4 2.5 10 3.7 15.7 3.7 5.6 0 11.3-1.2 15.7-3.7l61.9-35c4.7-2.7 7.3-6.4 7.3-10.6s-2.7-7.8-7.4-10.5z" fill="#749E52"></path>
                            </g>
                        </svg>
                        <p><strong>Las comodidades que buscas</strong></p>
                        <p>Opcion de parqueaderos, energía eléctrica, servicio de agua de acueducto veredal, opcion de cobertura de servicios de internet satelita.</p>
                    </div>
                    <div className={ `${ styles.columna } block-column` }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="2.9751567164179127 3.0246567164179083 194.05068656716418 194.05068656716418">
                            <g>
                                <path d="M47.5 174.3h.1c.3.2.7.3 1.1.3.2 0 .4 0 .6-.1l50.7-13.8 50.7 13.8c.2.1.4.1.6.1.4 0 .7-.1 1.1-.3h.1l42-25.6c.9-.5 1.3-1.6 1-2.6l-23.2-81.6c-.2-.7-.7-1.2-1.4-1.5-.7-.3-1.4-.2-2 .1l-23.1 13c-1.1.6-1.5 2.1-.9 3.2s2 1.5 3.2.9l20.6-11.5 22 77.1-37.4 22.8-8.9-71c-.2-1.3-1.4-2.2-2.6-2-1.3.2-2.2 1.3-2 2.6l8.7 71.2-46.5-12.9v-12.7c0-1.3-.7-2.3-2-2.3s-2 1-2 2.3v12.7l-46.4 12.6L60.4 98c.2-1.3-.8-2.4-2.1-2.6-1.3-.1-2.5.7-2.6 2l-8.9 71-37.3-22.8 21.9-77.1L52 80c1.1.6 2.5.2 3.2-.9.6-1.1.2-2.5-.9-3.2L31.1 63c-.6-.3-1.4-.4-2-.1-.7.3-1.2.8-1.4 1.5L4.5 146c-.3 1 .1 2.1 1 2.6l42 25.7z" fill="#749E52"></path>
                                <path d="M98.4 134.4c.4.4 1 .6 1.6.6.6 0 1.1-.2 1.6-.6 1.6-1.4 38.1-34.9 38.1-69.3 0-22.2-17.4-39.6-39.6-39.6S60.4 42.8 60.4 65c0 33.9 36.5 67.9 38 69.4zM100 30c19.9 0 35 15 35 35 0 28.4-27.9 57.5-35 64.4C93 122.5 65 93 65 65c0-19.9 15.1-35 35-35z" fill="#749E52"></path>
                                <path d="M121 65c0-11.6-9.4-21-21-21s-21 9.4-21 21 9.4 21 21 21 21-9.4 21-21zm-21 16.3c-9 0-16.3-7.3-16.3-16.3S91 48.7 100 48.7 116.3 56 116.3 65 109 81.3 100 81.3z" fill="#749E52"></path>
                            </g>
                        </svg>
                        <p><strong>Fácil acceso</strong></p>
                        <p>Por la autopista Bogotá - Medellín 1 km antes de llegar a La Vega, Cundinamarca, encuentra la tienda “Chilin”. Entre a la derecha por la carretera veredal y a 2 kilómetros lo recibe  “SINFONÍA DEL RÍO TABACAL”.</p>
                    </div>
                </div>
                <div className={ `${ styles.botones_cta } btn-container block-columns` }>
                    <Link
                        href="#Galeria-Fotos"
                    >
                        <a className="btn btn-rojo">Quiero ver más fotos</a>
                    </Link>
                    <Link
                        href="#"
                    >
                        <a className="btn btn-amarillo">Quiero contactarlos</a>
                    </Link>
                </div>
            </div>
        </section>
    );

}

export default Ventajas;