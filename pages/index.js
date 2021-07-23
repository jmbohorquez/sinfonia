import Cabecera from '../components/Cabecera';
import Proyecto from '../components/Proyecto';
import Recreacion from '../components/Recreacion';
import Naturaleza from '../components/Naturaleza';
import BotonesFlotantes from '../components/BotonesFlotantes';
import Contacto from '../components/Contacto';

export default function Home() {
    return (
        <>
            <Cabecera />
            <Proyecto />
            <Naturaleza />
            <Recreacion />
            <Contacto />
            <BotonesFlotantes />
        </>
    )
}
