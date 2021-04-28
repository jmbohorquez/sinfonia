import Link from 'next/link';

const BotonContacto = () => {
    
    return(
        <Link
            href="#Contacto"
        >
            <a 
                className="btn btn-amarillo"
            >Quiero contactarlos</a>
        </Link>
    );

}

export default BotonContacto;