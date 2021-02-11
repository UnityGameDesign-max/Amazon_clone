import React from 'react'
import './Home.css'
import Catergories from '../Catergories/Categories'
import SignIn from '../SignIn/SignIn'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" alt="" src={process.env.PUBLIC_URL +"amazon_pics/1st_background_img.jpg"} />
            </div>

            <div className="home_row">
                <Catergories card_header="Computers & Accessories" card_link="Shop now"  image="/amazon_pics/computer & Accessories.jpg" />
                <Catergories card_header="Shop By Catergory" image="/amazon_pics/Shop_by_catergories.jpg" card_link="Explore now" />
                <Catergories  card_header="Deals & Promotions" image="/amazon_pics/Deals&Promotions.jpg" card_link="See more"/>
            </div>

            <div className="home_row">
                <Catergories card_header="Beauty picks" card_link="Shop now" image="/amazon_pics/beauty_pics.jpg" />
                <Catergories card_header="AmazonBasics" card_link="Shop now" image="/amazon_pics/music_sounds.jpg" />
            
                <SignIn title="Sign in for the best experience" btn_text="Sign in securely" image="amazon_pics/amazon_delivery.jpg"/>
            </div>

            <div className="home_row">
                <Catergories card_header="Explore home bedding" card_link="See more" image="https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_600,h_420/https://custombeds.ie/wp-content/uploads/2020/11/capri-fabric-bed-600x420.jpg" />
                <Catergories card_header="Summer T-shirts for him" card_link="See more" image="https://siatexcom.s3.amazonaws.com/content/upload/2018/11/bangladesh-t-shirt-manufacturer-supplier-exporter-factory.jpg" />
                <Catergories card_header= "Stuffed animals and Toys" card_link="Shop now" image="https://24.lv/images/thumbnails/600/420/detailed/518/ID00993_3Deez-4_grande.jpg" />
            </div>
            
            
        </div>
    )
}

export default Home
