import { Container, Row, Col } from "react-bootstrap";
import Style from '../styles/footer.module.css'
import { AiOutlineRight } from 'react-icons/ai'
import { useState } from "react";
import { BsFacebook, BsTwitter, BsGithub } from 'react-icons/bs'

export default function footer() {
    const [Email, setEmail] = useState('')
    const [ValidEmail, setValidEmail] = useState([])
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    const EmailVari = (e, valid) => {
        e.preventDefault()
        if (valid === '') {
            alert(Email + ' Email cannot be blank');
            setEmail('')
        } else if (!isEmail(valid)) {
            alert(Email + ' Not a valid email');
            setEmail('')
        } else {
            const subscribe = {
                id: Date.now(),
                email: valid
            }
            alert('Thank you for subscribe ');
            setValidEmail([subscribe, ...ValidEmail])
            setEmail('')
        }
    }

    return (
        <Container fluid className={Style.Footer_contant}>
            <Row className="p-5">
                <Col sm={6} >
                    <div className={Style.Sign_up_contant}>
                        <p className={Style.Sign_up_title}> Sign Up to Receive Product Updates and More</p>
                        <div className={Style.Sign_up_input}>
                            <input className={Style.sign_input} type="email" name="email" placeholder="Enter Your E-mail then Receive the all updates" onChange={(e) => setEmail(e.target.value)} value={Email} />
                            <button onClick={(e) => EmailVari(e, Email)} className={Style.Sign_up_button}> <AiOutlineRight /> </button>
                        </div>
                    </div>
                </Col>
                <Col sm={3}>
                    <h1 className={Style.Footer_title}>Office</h1>
                    <p className={Style.Footer_p}>545, Street 11, Block F <br /> California, U.S.A</p>
                </Col>
                <Col sm={3}>
                    <h1 className={Style.Footer_title}>Contact</h1>
                    <p className={Style.Footer_p}>Phone: +8801917851640<br /> E-mail: sodium197@gmail.com</p>
                </Col>
            </Row>
            <div className={Style.Footer_bottom_contant}>
                <div className={Style.Footer_copyright}>
                    <p className={Style.Copyright_p}>2022. All Rights Reserved</p>
                    <ul className={Style.Footer_ul}>
                        <li>Terms & Conditions</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className={Style.Footer_icons}>
                    <BsFacebook />
                    <BsTwitter />
                    <BsGithub/>
                </div>
            </div>
        </Container>
    )
}