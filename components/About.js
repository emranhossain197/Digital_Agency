import { Container, Col, Row } from "react-bootstrap";
import { BsArrowUpRight } from 'react-icons/bs'
import Img from '../assets/images/Images.png'
import Style from '../styles/About.module.css'
import Image from 'next/image'
import Link from "next/link";

export default function About() {
    // useEffect(()=>{
    //     $(document).ready(function(){
    //         $('.count').CountUp({
    //             delay: 10,
    //             time: 1200
    //         })
    //     })
    // })

    return (
        <>
            <Container fluid className={Style.About_contant}>
                <Row className="p-5">
                    <Col sm={6} className='pb-3'>
                        <h1 className={Style.About_title}>We are a creative <br /> digital agency</h1>
                        <p className={Style.About_Sub_title}>Dalio started with a vision for building an agency to solve the business problems of the future, and that requires a different model.We’re not a branding agency that dabbles in tech, and we’re not a development shop that leaves you hanging when it’s time to go to market.</p>
                        <p className={Style.About_Sub_title}>We start with human experience and layer in technology and marketing to deliver truly integrated digital solutions.This unique set of capabilities sets us apart from other agencies and positions DIG to help you attack your goals.</p>

                        <button className={Style.about_button}><Link href='/error'>Contact</Link> <BsArrowUpRight /></button>
                    </Col>
                    <Col sm={6}>
                        <Image src={Img} className={Style.About_Img} />
                    </Col>
                </Row>
                <div className={Style.Count_contant}>
                    <div className={Style.Contant_counter}>
                        <h1>4.8 k</h1>
                        <h3 className={Style.Counter_title}>Job Completed</h3>
                    </div>
                    <div className={Style.Contant_counter}>
                        <h1>12+</h1>
                        <h3 className={Style.Counter_title}>Industry Experience</h3>
                    </div>
                    <div className={Style.Contant_counter}>
                        <h1>2.5k+</h1>
                        <h3 className={Style.Counter_title}>World wide clients</h3>
                    </div>
                    <div className={Style.Contant_counter}>
                        <h1>120+</h1>
                        <h3 className={Style.Counter_title}>Won Awards</h3>
                    </div>
                </div>
            </Container>

        </>
    )
}