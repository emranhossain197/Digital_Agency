import { Col, Container, Row } from "react-bootstrap";
import Style from '../styles/Service.module.css'
import { TbWriting } from 'react-icons/tb'
import { BsArrowUpRight } from 'react-icons/bs'
import { MdDesignServices } from 'react-icons/md'
import { SiAltiumdesigner } from 'react-icons/si'
import { IoIosDesktop } from 'react-icons/io'
import dynamic from "next/dynamic";
import Link from "next/link";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
    ssr: false,
});

export default function Service() {
    const options = {
        margin: 10,
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 2,

            }
        },
    };

    return (
        <Container fluid className={Style.Service_container}>
            <h1 className={Style.Servie_title}>Service we Can <br />help  you</h1>
            {/* Mobile response contant make this */}
            <div className={Style.Mobile_Response_Service_contant}>
                <OwlCarousel className="owl-theme" {...options}>
                    <div className={Style.Serive_item_1}>
                        <TbWriting className={Style.Service_icon} />
                        <h1 className={Style.Service_item_title}> Content Writing </h1>
                        <p className={Style.Service_item_Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus. </p>
                        <button className={Style.Service_item_button}> <Link href='/error'>Read More</Link> <BsArrowUpRight /></button>
                    </div>
                    <div className={Style.Serive_item_2}>
                        <MdDesignServices className={Style.Service_icon} />
                        <h1 className={Style.Service_item_title}> UX Research </h1>
                        <p className={Style.Service_item_Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus. </p>
                        <button className={Style.Service_item_button}> <Link href='/error'>Read More</Link> <BsArrowUpRight /></button>
                    </div>
                    <div className={Style.Serive_item_3}>
                        <SiAltiumdesigner className={Style.Service_icon} />
                        <h1 className={Style.Service_item_title}> Branding  </h1>
                        <p className={Style.Service_item_Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus. </p>
                        <button className={Style.Service_item_button}> <Link href='/error'>Read More</Link> <BsArrowUpRight /></button>
                    </div>
                    <div className={Style.Serive_item_4}>
                        <IoIosDesktop className={Style.Service_icon} />
                        <h1 className={Style.Service_item_title}> Web design </h1>
                        <p className={Style.Service_item_Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus. </p>
                        <button className={Style.Service_item_button}> <Link href='/error'>Read More</Link> <BsArrowUpRight /></button>
                    </div>
                </OwlCarousel>
            </div>
            <Container className={Style.Service_contant}>
                <Row>
                    <Col>
                        <div className={Style.Serive_item_1}>
                            <TbWriting className={Style.Service_icon} />
                            <h1 className={Style.Service_item_title}> Content Writing </h1>
                            <p className={Style.Service_item_Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus. </p>
                            <button className={Style.Service_item_button}> <Link href='/error'>Read More</Link> <BsArrowUpRight /></button>
                        </div>
                        <div className={Style.Serive_item_2}>
                            <MdDesignServices className={Style.Service_icon} />
                            <h1 className={Style.Service_item_title}> UX Research </h1>
                            <p className={Style.Service_item_Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus. </p>
                            <button className={Style.Service_item_button}> <Link href='/error'>Read More</Link> <BsArrowUpRight /></button>
                        </div>
                    </Col>
                    <Col className={Style.Service_item_right}>
                        <div className={Style.Serive_item_3}>
                            <SiAltiumdesigner className={Style.Service_icon} />
                            <h1 className={Style.Service_item_title}> Branding  </h1>
                            <p className={Style.Service_item_Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus. </p>
                            <button className={Style.Service_item_button}> <Link href='/error'>Read More</Link> <BsArrowUpRight /></button>
                        </div>
                        <div className={Style.Serive_item_4}>
                            <IoIosDesktop className={Style.Service_icon} />
                            <h1 className={Style.Service_item_title}> Web design </h1>
                            <p className={Style.Service_item_Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus. </p>
                            <button className={Style.Service_item_button}> <Link href='/error'>Read More</Link> <BsArrowUpRight /></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}