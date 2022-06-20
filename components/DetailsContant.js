import { Container, Row, Col } from "react-bootstrap"
import Style from '../styles/DetailsContant.module.css'
import Img from '../assets/images/Rectangle4.png'

export default function DetailsContant() {
    return (
        <Container fluid>
            <Row className={Style.Details_contant}>
                <Col sm={5} className={Style.Details_left_contant}>
                    <img src={Img.src} className={Style.Image} />
                </Col>
                <Col sm={7} className={Style.Details_right_contant}>
                    <h1 className={Style.Detail_h1}>Our Solution Approach</h1>
                    <ul className={Style.Details_ul}>
                        <li><h3 className={Style.Details_ul_li_h3}>Data Analysis with problem factor</h3>
                            <p className={Style.Details_ul_li_p}>Delivering the spatial expertise of the largest, most sophisticated performance marketing agencies, while providing intimate, boutique-like support.</p></li>
                        <li><h3 className={Style.Details_ul_li_h3}>Functionality solution for users</h3>
                            <p className={Style.Details_ul_li_p}>Delivering the spatial expertise of the largest, most sophisticated performance marketing agencies.</p></li>
                        <li><h3 className={Style.Details_ul_li_h3}>Latest technology enabled</h3>
                            <p className={Style.Details_ul_li_p}>Technology the spatial expertise of the largest, most sophisticated performance marketing agencies, while providing intimate, boutique-like support.</p></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
