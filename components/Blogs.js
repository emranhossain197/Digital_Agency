import { Container } from "react-bootstrap";
import { BlogData } from '../assets/BlogData'
import Style from '../styles/Blogs.module.css'
import { BsArrowUpRight } from 'react-icons/bs'
import Link from 'next/link'
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
    ssr: false,
});


export default function Blogs() {
    const BlogArr = []
    for (let i = 0; i < BlogData.length; i++) {
        if (i === 2) break
        BlogArr.push(BlogData[i])
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
        <Container fluid className={Style.Blog_container}>
            <h1 className={Style.Blog_Container_title}>Blog from insights</h1>
            {/* Mobile response then make this section or div  */}
            <div className={Style.Blog_contant_mobile}>
                <OwlCarousel className="owl-theme" {...options}>
                    {BlogData.map(item => (
                        <div className={Style.Blog_item_mobile}>
                            <img src={item.image.src} className={Style.Blog_item_img} />
                            <h6 className={Style.Blog_item_catagorie}>{item.Name}</h6>
                            <p className={Style.Blog_item_PablishData}>{item.PlablishParson} {item.plablishDate}</p>
                            <h2 className={Style.Blog_item_title}>{item.title}</h2>
                            <button className={Style.Blog_item_button}> <Link href='/error'>Read More</Link> <BsArrowUpRight /></button>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
            <div className={Style.Blog_Contant}>
                {BlogArr.map(item => (
                    <div className={Style.Blog_item}>
                        <img src={item.image.src} className={Style.Blog_item_img} />
                        <h6 className={Style.Blog_item_catagorie}>{item.Name}</h6>
                        <p className={Style.Blog_item_PablishData}>{item.PlablishParson} {item.plablishDate}</p>
                        <h2 className={Style.Blog_item_title}>{item.title}</h2>
                        <button className={Style.Blog_item_button}> <Link href='/error'>Read More</Link> <BsArrowUpRight /></button>
                    </div>
                ))}
            </div>
        </Container>
    )
}