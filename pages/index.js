import Cabecera from '../components/Cabecera';
import Proyecto from '../components/Proyecto';
import Recracion from '../components/Recreacion';
import Naturaleza from '../components/Naturaleza';
import Ventajas from '../components/Ventajas';
import MapaUbicacion from '../components/MapaUbicacion';
import GaleriaFotos from '../components/GaleriaFotos';
import GaleriaVideos from '../components/GaleriaVideos';
import BotonesFlotantes from '../components/BotonesFlotantes';
import Contacto from '../components/Contacto';

export default function Home() {
    return (
        <>
            <Cabecera />
            <Proyecto />
            <Naturaleza />
            <Recracion />
            <Ventajas />
            <MapaUbicacion />
            <GaleriaFotos />
            <GaleriaVideos />
            <Contacto />
            <BotonesFlotantes />
        </>
    )
}
