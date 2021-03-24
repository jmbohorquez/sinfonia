import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image';
import ImageViewer from 'react-simple-image-viewer';

import styles from '../styles/GaleriaFotos.module.css';
import Fotos from '../public/galeria/galeria.json';

const GaleriaFotos = () => {

    const [ currentImage, setCurrentImage ] = useState( 0 );
    const [ isViewerOpen, setIsViewerOpen ] = useState( false );
    const [ images, setImages ] = useState([]);

    const openImageViewer = useCallback( ( index ) => {
        setCurrentImage( index );
        setIsViewerOpen( true );
    }, [] );
    
    const closeImageViewer = () => {
        setCurrentImage( 0 );
        setIsViewerOpen( false );
    };

    useEffect( () => {

        const cargaImagenes = () => {
            Fotos.map( imagen => setImages( images => [
                ...images,
                imagen.url
            ]) );
        }

        cargaImagenes();

    }, [] );
    
    return(
        <section id="Galeria-Fotos" className={ styles.container }>
            <div className="site-wrap block-grid has-3-columns">
                {
                    Fotos.map( foto => (
                        <div 
                            key={ foto.id }
                            className={ `${ styles.imagen_contenedor } block-column` }
                        >
                            <Image 
                                src={ foto.url }
                                alt={ foto.alt }
                                height={ foto.alto }
                                width={ foto.ancho }
                                onClick={ () => openImageViewer( foto.id ) }
                            />
                        </div>
                    ) )
                }
                { isViewerOpen && (
                    <ImageViewer
                        src={ images }
                        currentIndex={ currentImage }
                        onClose={ closeImageViewer }
                        backgroundStyle={{ 
                            backgroundColor: 'rgba( 0,0,0,0.7 )'
                        }}
                    />
                )}
            </div>
        </section>
    );

}

export default GaleriaFotos;