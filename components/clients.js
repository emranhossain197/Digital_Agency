import { Container } from 'react-bootstrap'
import Style from '../styles/Clients.module.css'
import { FaQuoteLeft } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import Image1 from '../assets/images/Ellipse.png'
import Image2 from '../assets/images/Ellipse1.png'
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
    ssr: false,
});

export default function Clients() {
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
                items: 1,
            },
            1000: {
                items: 2,

            }
        },
    };
    return (
        <Container fluid className={Style.client_contant}>
            <h1 className={Style.Client_contant_title}>What say happy clients</h1>
            <OwlCarousel className="owl-theme" {...options}>
                <div className={Style.Client_item}>
                    <FaQuoteLeft className={Style.quote_icon} />
                    <p className={Style.Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper consequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisque elementum, consequat pharetra lectus eget vivamus ut. Magna aliquam tellus at volutpat cras aliquet facilisi quis adipiscing.</p>
                    <div className={Style.Client_item_contant}>
                        <div className={Style.Client_parson_item}>
                            <img src={Image1.src} className={Style.Client_item_img} />
                            <h2 className={Style.Client_parson_name}>Brooklyn Simmons <br /> <span>Pendron.Inc, CEO</span></h2>
                        </div>
                        <h3 className={Style.Star}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>

                    </div>
                </div>

                <div className={Style.Client_item}>
                    <FaQuoteLeft className={Style.quote_icon} />
                    <p className={Style.Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper consequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisque elementum, consequat pharetra lectus eget vivamus ut. Magna aliquam tellus at volutpat cras aliquet facilisi quis adipiscing. </p>
                    <div className={Style.Client_item_contant}>
                        <div className={Style.Client_parson_item}>
                            <img src={Image2.src} className={Style.Client_item_img} />
                            <h2 className={Style.Client_parson_name}>Brooklyn Simmons <br /> <span>Pendron.Inc, CEO</span></h2>
                        </div>
                        <h3 className={Style.Star}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>

                    </div>
                </div>

                <div className={Style.Client_item}>
                    <FaQuoteLeft className={Style.quote_icon} />
                    <p className={Style.Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper consequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisque elementum, consequat pharetra lectus eget vivamus ut. Magna aliquam tellus at volutpat cras aliquet facilisi quis adipiscing. </p>
                    <div className={Style.Client_item_contant}>
                        <div className={Style.Client_parson_item}>
                            <img src={Image1.src} className={Style.Client_item_img} />
                            <h2 className={Style.Client_parson_name}>Brooklyn Simmons <br /> <span>Pendron.Inc, CEO</span></h2>
                        </div>
                        <h3 className={Style.Star}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>

                    </div>
                </div>

                <div className={Style.Client_item}>
                    <FaQuoteLeft className={Style.quote_icon} />
                    <p className={Style.Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper consequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisque elementum, consequat pharetra lectus eget vivamus ut. Magna aliquam tellus at volutpat cras aliquet facilisi quis adipiscing. </p>
                    <div className={Style.Client_item_contant}>
                        <div className={Style.Client_parson_item}>
                            <img src={Image2.src} className={Style.Client_item_img} />
                            <h2 className={Style.Client_parson_name}>Brooklyn Simmons <br /> <span>Pendron.Inc, CEO</span></h2>
                        </div>
                        <h3 className={Style.Star}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>

                    </div>
                </div>
            </OwlCarousel>
        </Container>
    )
}