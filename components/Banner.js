import { Container } from "react-bootstrap";
import Style from '../styles/Banner.module.css'
import ClassImg from '../assets/images/Group-25.png'
import Star from '../assets/images/Star.png'
import Vector from '../assets/images/vector1.png'
import SlideImg from '../assets/images/Side- image.png'
import HeroImg from '../assets/images/Hero-image.png'
import Vector2 from '../assets/images/vector2.png'
import { BsArrowUpRight } from 'react-icons/bs'
import Link from "next/link";

export default function Banner() {
    return (
        <Container fluid className={Style.Banner}>
            <img src={ClassImg.src} className={Style.BannerSubImg} />
            <img src={Star.src} className={Style.Star_img} />
            <img src={Star.src} className={Style.Star_img_2} />
            <img src={Vector.src} className={Style.vector} />
            <img src={Vector2.src} className={Style.vector2} />
            <h1 className={Style.first_title}>Digital</h1>
            <div className={Style.bannerSubTitle}>
                <h1 className={Style.title}>Agency</h1>
                <p className={Style.titleP}>Full-service design support that growing B2B companies need. World leading agency.</p><br />
                <button className={Style.banner_button}> <Link href='/error'>Our Project </Link> <BsArrowUpRight /></button>
            </div>
            <img src={SlideImg.src} className={Style.SlideImg} />
            <img src={HeroImg.src} className={Style.HeroImg} />
        </Container>
    )
}