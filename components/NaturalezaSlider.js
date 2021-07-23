import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';


const NaturalezaSlider = () => {

    const timer = useRef();

    const [ sliderRef, slider ] = useKeenSlider({
        initial: 0,
        loop: true,
        duration: 2000,
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
        <div ref={ sliderRef } className="keen-slider">
            <div className="keen-slider__slide number-slide1">
                <Image 
                    src="/images/natur-1.jpg"
                    height={540}
                    width={1920}
                    layout="responsive"
                />
            </div>
            <div className="keen-slider__slide number-slide2">
                <Image 
                    src="/images/natur-2.jpg"
                    height={540}
                    width={1920}
                    layout="responsive"
                />
            </div>
            <div className="keen-slider__slide number-slide3">
                <Image 
                    src="/images/natur-3.jpg"
                    height={540}
                    width={1920}
                    layout="responsive"
                />
            </div>
        </div>
    );

}

export default NaturalezaSlider;