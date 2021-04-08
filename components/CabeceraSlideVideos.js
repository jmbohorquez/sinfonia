import styles from '../styles/CabeceraVideoSlide.module.scss';

const CabeceraSlideVideos = () => {

    return(
        <div className={ `banner-image-container ${ styles.cabecera_video_container } video-cover` }>
            <div id="video-container-1" className={ styles.video_wrap }>
                <video
                    src="videos/cabecera-1.mp4"
                    width="1920" 
                    height="1080"
                    className="cover"
                    muted="muted"
                    autoPlay="true"
                    id="video-1"
                ></video>
            </div>
            <div id="video-container-2" className={ styles.video_wrap }>
                <video
                    src="videos/cabecera-2.mp4"
                    width="1920" 
                    height="1080"
                    muted="muted"
                    autoPlay=""
                    className="cover"
                    id="video-2"
                ></video>
            </div>
        </div>
    );

}

export default CabeceraSlideVideos;