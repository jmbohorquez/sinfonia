import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    
    return(
        <>
            <Head>
                <title>Condominio Campestre Sinfonía | Venta de lotes</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap" rel="stylesheet" />
            </Head>

            <Header />

            <div>
                { children }
            </div>

            <Footer />
        </>
    )

}

export default Layout;