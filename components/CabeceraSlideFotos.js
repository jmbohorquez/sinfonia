import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css'

const CabeceraSlideFotos = () => {

    const [ pause, setPause ] = useState( false );
    const timer = useRef();
    
    const [ sliderRef, slider ] = useKeenSlider({
        initial: 0,
        loop: true,
        duration: 1000,
    });

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

    //Responsive
    const isPhone = useMediaQuery({ maxDeviceWidth: 414 });
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    
    return(
        <div ref={ sliderRef } className="banner-image-container keen-slider">
            
            {
                ( isPhone && isPortrait )
                ?
                    <>
                        <div className="keen-slider__slide number-slide1">
                            <Image 
                                src="/images/slide-phone-vert-1.jpg"
                                height={ 414 }
                                width={ 812 }
                                className="cover"
                            />
                        </div>
                        <div className="keen-slider__slide number-slide2">
                            <Image 
                                src="/images/slide-phone-vert-2.jpg"
                                height={ 414 }
                                width={ 812 }
                                className="cover"
                            />
                        </div>
                        <div className="keen-slider__slide number-slide3">
                            <Image 
                                src="/images/slide-phone-vert-3.jpg"
                                height={ 414 }
                                width={ 812 }
                                className="cover"
                            />
                        </div>
                        <div className="keen-slider__slide number-slide4">
                            <Image 
                                src="/images/slide-phone-vert-4.jpg"
                                height={ 414 }
                                width={ 812 }
                                className="cover"
                            />
                        </div>
                        <div className="keen-slider__slide number-slide5">
                            <Image 
                                src="/images/slide-phone-vert-5.jpg"
                                height={ 414 }
                                width={ 812 }
                                className="cover"
                            />
                        </div>
                    </>
                :
                    <>
                        <div className="keen-slider__slide number-slide1">
                            <Image 
                                src="/images/slide-phone-hor-1.jpg"
                                height={ 812 }
                                width={ 414 }
                                className="cover"
                            />
                        </div>
                        <div className="keen-slider__slide number-slide2">
                            <Image 
                                src="/images/slide-phone-hor-2.jpg"
                                height={ 812 }
                                width={ 414 }
                                className="cover"
                            />
                        </div>
                        <div className="keen-slider__slide number-slide3">
                            <Image 
                                src="/images/slide-phone-hor-3.jpg"
                                height={ 812 }
                                width={ 414 }
                                className="cover"
                            />
                        </div>
                        <div className="keen-slider__slide number-slide4">
                            <Image 
                                src="/images/slide-phone-hor-4.jpg"
                                height={ 812 }
                                width={ 414 }
                                className="cover"
                            />
                        </div>
                        <div className="keen-slider__slide number-slide5">
                            <Image 
                                src="/images/slide-phone-hor-5.jpg"
                                height={ 812 }
                                width={ 414 }
                                className="cover"
                            />
                        </div>
                    </>
            }
            
        </div>
    );

}

export default CabeceraSlideFotos;