import React from 'react'
import './Home.css'
import Catergories from './Categories'
import SignIn from './SignIn'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" alt="" src="https://i.pinimg.com/originals/a2/b7/be/a2b7bed31006559ed35be11391f85187.jpg" />
            </div>

            <div className="home_row">
                <Catergories card_header="Computers & Accessories" card_link="Shop now"  image="https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg" />
                <Catergories card_header="Get fit at home" image="https://skinnyms.com/wp-content/uploads/2019/01/How-to-Get-Fit-with-the-Best-At-Home-Workout-1.png" card_link="Explore now" />
                <Catergories  card_header="Find your ideal TV" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7APe5MVFjjriIqd9YFACr6b2-O0LjBq8fOQ&usqp=CAU" card_link="See more"/>
            </div>

            <div className="home_row">
                <Catergories card_header="Beauty picks" card_link="Shop now" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG__fdhz-Vnmxu6LjjnDJXnO1V1GC0zTFwPA&usqp=CAU" />
                <Catergories card_header="Household Appliances" card_link="Shop now" image="https://media.istockphoto.com/photos/home-appliancess-set-of-household-kitchen-technics-in-the-new-or-picture-id952839420?k=6&m=952839420&s=612x612&w=0&h=VgQfQfryejLqCm9Z59lX2vzJuGAyjHIQPAaKtbGJPP8=" />
            
                <SignIn title="Sign in for the best experience" btn_text="Sign in securely" image="https://www.naijatechguide.com/wp-content/uploads/2015/09/amazon-global-1.png"/>
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
