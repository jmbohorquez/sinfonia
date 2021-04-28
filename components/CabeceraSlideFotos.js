import Image from 'next/image';

const CabeceraSlideFotos = () => {
    
    return(
        <div className="banner-image-container keen-slider">
            
            <div className="keen-slider__slide number-slide5">
                <Image 
                    src="/images/slide-phone-vert-5.jpg"
                    height={ 414 }
                    width={ 812 }
                    className="cover"
                />
            </div>
            
        </div>
    );

}

export default CabeceraSlideFotos;