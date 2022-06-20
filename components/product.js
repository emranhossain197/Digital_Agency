import { Projects } from "../assets/data"
import { useState } from "react"
import { Container } from 'react-bootstrap'
import Style from '../styles/Product.module.css'
import { AiOutlineLink } from 'react-icons/ai'
import Link from 'next/link'
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
    ssr: false,
});

export default function Product() {
    const [isActive, setIsActive] = useState(0)
    const ProductArr = []
    for (let i = 0; i < Projects.length; i++) {
        if (i === 2) break
        ProductArr.push(Projects[i])
    }
    const [Product, setProduct] = useState(ProductArr)

    const productCatagorie = (catagorie, item) => {
        setIsActive(item)
        if (catagorie === 'All') {
            setProduct(ProductArr)
        } else {
            const productfilter = Projects.filter(item => item.catagorie === catagorie)
            const ProductArrs = []
            for (let i = 0; i < productfilter.length; i++) {
                if (i === 2) break
                ProductArrs.push(productfilter[i])
            }
            setProduct(ProductArrs)
        }
    }
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
        <Container fluid className={Style.Project_contant}>
            <h1 className={Style.product_Section_title}>Our latest Projects</h1>
            <ul className={Style.product_catagorie_button}>
                <li className={isActive === 0 ? Style.isActive_item_Color : ""} onClick={() => productCatagorie('All', 0)}>All</li>
                <li className={isActive === 1 ? Style.isActive_item_Color : ""} onClick={() => productCatagorie('Web Design', 1)}>UI/UX</li>
                <li className={isActive === 2 ? Style.isActive_item_Color : ""} onClick={() => productCatagorie('UX', 2)}>Web design</li>
            </ul>
            {/* Mobile response section make this  */}
            <div className={Style.Mobile_response_Product_contant}>
                <OwlCarousel className="owl-theme" {...options}>
                    {Product.map(item => (
                        <div className={Style.Product_item_Mobile}>
                            <img src={item.image.src} className={Style.Product_item_image} />
                            <AiOutlineLink className={Style.Product_link} />
                            <h2 className={Style.Product_item_title}> <Link href='/error'>{item.name}</Link></h2>

                            <p className={Style.Product_item_description}>{item.description}</p>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
            <div className={Style.product_item_contant}>
                {Product.map(item => (
                    <div className={Style.Product_item}>
                        <img src={item.image.src} className={Style.Product_item_image} />
                        <AiOutlineLink className={Style.Product_link} />
                        <h2 className={Style.Product_item_title}> <Link href='/error'>{item.name}</Link></h2>
                        <p className={Style.Product_item_description}>{item.description}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
}