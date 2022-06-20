import About from '../components/About'
import Banner from '../components/Banner'
import Blogs from '../components/Blogs'
import Clients from '../components/clients'
import DetailsContant from '../components/DetailsContant'
import Navbar from '../components/Navbar'
import Product from '../components/product'
import Service from '../components/Service'
import Footer from '../components/footer'

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Banner />
            <About />
            <DetailsContant />
            <Service />
            <Product />
            <Clients />
            <Blogs />
            <Footer />
        </>
    )
}