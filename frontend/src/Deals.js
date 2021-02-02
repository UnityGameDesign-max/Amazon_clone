import React from 'react'
import './Deals.css'
import Products from './Products'

function Deals() {
    return (
        <div className="all_products">
            <h1>Deals and Promotions</h1>
            <p>Shop Today's Deals, Lightning Deals,and Limited-time discounts</p>

            <span className="product_results">Showing 1-32 0f 1000 results for <strong>3 Availability Options</strong></span>

            <div className="products_row">
                <Products product_image= '/amazon_pics/toyStrory_figue.jpg' product_description = "Toy Story Disney Pixar 4 BULLSEYE -Character Pack, Movie-Inspired:" price_dollar ="11" price_cent="65" specials="Ships to South Africa" />
                <Products product_image= '/amazon_pics/xbox_controller.jpg' product_description = "Xbox Core Controller - Carbon Black" price_dollar ="64" price_cent="95" specials="Ships to South Africa" />
                <Products product_image= '/amazon_pics/school_bag.jpg' product_description = "Ronyes Unisex College Bag Fits up to 15.6 Laptop Casual Rucksack Waterproof School" price_dollar ="24" price_cent="00" specials="Sponsered" />
            </div>

            <div className="products_row">
                <Products product_image= '/amazon_pics/baby_cups.jpg' product_description = "NatureBond Baby Food Feeder/Fruit Feeder Pacifier" price_dollar ="13" price_cent="99" specials="Ships to South Africa"/>
                <Products product_image= '/amazon_pics/gaming_headphones.jpg' product_description = "RUNMUS GAMING Headset Xbox One Headset with 7.1 Surround Sound" price_dollar ="25" price_cent="95" specials="Ships to South Africa"/>
                <Products product_image= '/amazon_pics/watch_ladies.jpg' product_description = "Anne Klein Womens's Accented Gold- Tone Bracelet Watch" price_dollar ="35" price_cent="65" specials="Ships to South Africa"/>

            </div>

            <div className="products_row">
                <Products product_image= '/amazon_pics/dove.jpg' product_description = "Moisturizing Cream | Body and Face Moisturizer for Dry Skin" price_dollar ="16" price_cent="99" specials="Ships to South Africa"/>
                <Products product_image= '/amazon_pics/Batteries.jpg' product_description = "Amazon Basic 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life" price_dollar ="25" price_cent="95" specials="Ships to South Africa"/>
                <Products product_image= '/amazon_pics/cat_food.jpg' product_description = "Puria ONE Tender Selects Blend Adults Dry Cat Food" price_dollar ="12" price_cent="05" specials="Amazon's Choice"/>
            </div>

            <img className="amazon_ad" alt="" src={process.env.PUBLIC_URL + 'amazon_pics/amazon_marketing.png'} />
            
        </div>
    )
}

export default Deals
