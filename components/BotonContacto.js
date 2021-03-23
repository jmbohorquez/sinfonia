import Link from 'next/link';

const BotonContacto = () => {

    const abrirContacto = () => {

        const panel = document.getElementById('Contacto');
        panel.style.display = 'block';

    }
    
    return(
        <Link
            href="#"
        >
            <a 
                className="btn btn-amarillo"
                onClick={ () => abrirContacto() }
            >Quiero contactarlos</a>
        </Link>
    );

}

export default BotonContacto;