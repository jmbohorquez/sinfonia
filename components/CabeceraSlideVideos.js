import Image from 'next/image';
import styles from '../styles/CabeceraVideoSlide.module.scss';

const CabeceraSlideVideos = () => {

    return(
        <div className={ `banner-image-container ${ styles.cabecera_video_container } video-cover` }>
            <Image 
                src="/images/cabezote.jpg"
                alt="Venta de lotes condominio Sinfonía del Río Tabacal"
                height={ 1920 }
                width={ 1080 }
            />
        </div>
    );

}

export default CabeceraSlideVideos;