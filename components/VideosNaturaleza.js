import styles from '../styles/VideosNaturaleza.module.scss';

const VideosNaturaleza = () => {

    return(
        <section className={ styles.container }>
            <div className="site-wrap block-columns has-2-columns">
                <div className={ `${ styles.vid_container } block-column` }>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/VSLZsiA74dI" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen></iframe>
                </div>
                <div className={ `${ styles.vid_container } block-column` }>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/ZbvY9mNH_p8" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )

}

export default VideosNaturaleza;