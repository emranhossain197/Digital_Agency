import Navber from "../components/Navbar"
import Footer from "../components/footer"
import ErrorImg from '../assets/images/error.png'
import Style from '../styles/error.module.css'
import Link from "next/link"
import Image from 'next/image'

const Error = () => {
    return (
        <>
            <Navber />
            <div className={Style.error_contant}>
                <Image src={ErrorImg} className={Style.error_img} />
                {/* <img src={ErrorImg.src} className={Style.error_img} /> */}
                <h1 className={Style.error_title}>Something went wrong, looks like this page doesn't exist anymore</h1><br />
                <button className={Style.error_button}> <Link href='/'>Back To Home</Link></button>
            </div>

            <Footer />
        </>
    )
}
export default Error