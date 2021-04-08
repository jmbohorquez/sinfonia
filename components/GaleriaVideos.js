import { useEffect, useState, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles/GaleriaVideos.module.scss';


function ArrowLeft( props ) {
    
    const disabeld = props.disabled ? " arrow--disabled" : ""
    
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

const GaleriaVideos = () => {

    const [ currentSlide, setCurrentSlide ] = useState(0)
    const [ pause, setPause ] = useState( false );
    const timer = useRef();

    let slidesPerView = 2;
    const isPhone = useMediaQuery({ maxDeviceWidth: 414 });

    if( isPhone ){
        slidesPerView = 1;
    }

    const [ sliderRef, slider ] = useKeenSlider({
        initial: 0,
        duration: 1000,
        slidesPerView: slidesPerView,
        loop: true,
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        }
    });

    useEffect( () => {
        
        sliderRef.current.addEventListener( "mouseover", () => {
            setPause(true)
        } )
        sliderRef.current.addEventListener( "mouseout", () => {
            setPause(false)
        } )

    }, [ sliderRef ] );

    useEffect( () => {

        timer.current = setInterval( () => {
            if ( !pause && slider ) {
              slider.next()
            }
        }, 4000 )
        return () => {
            clearInterval( timer.current )
        }

    }, [ pause, slider ] );

    return(
        <section className={ styles.container }>
            <div className={ `site-wrap` }>
                <div ref={ sliderRef } className="keen-slider">
                    <div className="keen-slider__slide number-slide1">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/CpXcNmcuEdo" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/N21ELI37_fs" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="keen-slider__slide number-slide3">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/JjblYuB-FuI" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="keen-slider__slide number-slide4">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/ZbvY9mNH_p8" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="keen-slider__slide number-slide5">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/JNFAJ5HVeHY" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="keen-slider__slide number-slide6">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/76q-sQQ6ZT4" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="keen-slider__slide number-slide7">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/KzZYdgwYnXg" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="keen-slider__slide number-slide8">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/VSLZsiA74dI" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="keen-slider__slide number-slide9">
                        <iframe 
                            width="560"
                            height="315" 
                            src="https://www.youtube.com/embed/iQljI4wHF6A" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                { slider && (
                
                    <div className="video-arrow-wrapper">
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
        </section>
    );

}

export default GaleriaVideos