import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';

function ArrowLeft( props ) {
    
    const disabeld = props.disabled ? " arrow--disabled" : "";
    
    return (
        <svg
            onClick={ props.onClick }
            className={ "arrow arrow--left" + disabeld }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
    );

}
  
function ArrowRight(props) {
    
    const disabeld = props.disabled ? " arrow--disabled" : ""

    return (
        <svg
            onClick={props.onClick}
            className={"arrow arrow--right" + disabeld}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
    );
}

const CabeceraSlideFotos = () => {
    
    const [ currentSlide, setCurrentSlide ] = useState(0)
    const timer = useRef();

    const [ sliderRef, slider ] = useKeenSlider({
        initial: 0,
        loop: true,
        duration: 1500,
    });

    useEffect( () => {

        timer.current = setInterval( () => {
            if ( slider ) {
              slider.next()
            }
        }, 4000 )
        return () => {
            clearInterval( timer.current )
        }

    }, [ slider ] );

    return(
        <div className="header-slider">
            <div ref={ sliderRef } className="keen-slider">
                
                <div className="keen-slider__slide number-slide1">
                    <Image 
                        src="/images/cabezote-1.jpg"
                        height={ 1080 }
                        width={ 1920 }
                        layout="responsive"
                        className="cover"
                    />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <Image 
                        src="/images/cabezote-2.jpg"
                        height={ 1080 }
                        width={ 1920 }
                        layout="responsive"
                        className="cover"
                    />
                </div>
                <div className="keen-slider__slide number-slide3">
                    <Image 
                        src="/images/cabezote-3.jpg"
                        height={ 1080 }
                        width={ 1920 }
                        layout="responsive"
                        className="cover"
                    />
                </div>
                <div className="keen-slider__slide number-slide4">
                    <Image 
                        src="/images/cabezote-4.jpg"
                        height={ 1080 }
                        width={ 1920 }
                        layout="responsive"
                        className="cover"
                    />
                </div>
                
            </div>
            <div className="banner-text-container">
                <div className="site-wrap">
                    <div className="">
                        <h1 className="site-title">Sinfonia del río tabacal condominio campestre</h1>
                        <p className="sub-titulo">La vega – Cundinamarca</p>
                        <p className="copy">El lote soñado para tu casa</p>
                    </div>
                </div>
            </div>
            { slider && (
                    
                <div className="arrow-wrapper">
                    <ArrowLeft
                        onClick={(e) => e.stopPropagation() || slider.prev()}
                        disabled={currentSlide === 0}
                    />
                    <ArrowRight
                        onClick={(e) => e.stopPropagation() || slider.next()}
                        disabled={currentSlide === slider.details().size - 1}
                    />
                </div>
                
            )}
        </div>
    );

}

export default CabeceraSlideFotos;