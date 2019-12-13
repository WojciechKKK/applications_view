import React, { Component } from 'react'

import '../styles/main.scss'
import'./Exercises.scss';

import ScrollBar from './Pagination/ScrollBar.jsx'
import City from './City/City.jsx'
import FilesUpload from './FilesUpload/FilesUpload.jsx'
import Stocks from './Stocks/Stocks.jsx'
import stocks from './Stocks/image/stocks.png'
import Dishes from './Dishes/Dishes.jsx'
import CreditCard from './CreditCard/CreditCard.jsx'
import ThingsToDo from './ThingsToDo/ThingsToDo.jsx';
import SupriseMe from './SupriseMe/SupriseMe.jsx';
import TodaySchedule from './TodaySchedule/TodaySchedule.jsx'
import AccountSummary from './AccountSummary/AccountSummary.jsx'
import Travel from './Travel/Travel.jsx'

class Exercises extends Component{
    render(){
        return(
            <div className="exercisesContainer">
                <ScrollBar /> 
                <City city="Moscow" color="rgb(254,110,75)" img="https://i1.wp.com/trimmtravels.com/wp-content/uploads/2018/02/Places-To-Visit-in-Moscow-Russia-36.jpg?fit=720%2C582&ssl=1" />
                <City city="Rome" color="rgb(76,162,255)" img="https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg" />
                <City city="Beijing" color="rgb(0,134,136)" img="https://images2.minutemediacdn.com/image/upload/c_crop,h_2048,w_3640,x_0,y_515/f_auto,q_auto,w_1100/v1554737867/shape/mentalfloss/istock-874468942.wenjie_dong.jpg" />
                <FilesUpload />
                <Stocks img={stocks} />
                <Dishes title="desserts" color="rgb(255,167,38)" img="https://img.taste.com.au/uu4WxRg_/taste/2017/07/wagon-wheel-paris-brest-128418-1.jpg" /> 
                <Dishes title="breakfast" color="rgb(255,73,103)"img="https://food-images.files.bbci.co.uk/food/recipes/veggie_breakfast_fry_up_66913_16x9.jpg" /> 
                <Dishes title="asian" color="rgb(160,199,112)" img="https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,d_au:cuisines:asian-6.jpg,f_auto,q_auto,w_500/v1/au/restaurants/2597626.jpg" /> 
                <CreditCard company="American Express" color="rgb(122,86,252)" />
                <CreditCard company="Visa" color="rgb(42,152,255)" />
                <CreditCard company="MasterCard" color="rgb(102,187,106)" />
                <ThingsToDo /> 
                <SupriseMe />
                <TodaySchedule name="Hannahhh" />
                <AccountSummary />
                <Travel name="food" text="Food, makes us all connected in some ways" items={8} color="rgb(255,73,103)" img="https://cdn.citynomads.com/wp-content/uploads/2017/06/08154455/straits-kitchen-cover3.png"/>
                <Travel name="travel" text="Travel & explore the world without hesitation." items={4} color="rgb(76,162,255)" img="https://www.fcmtravel.com/sites/default/files/styles/grid_items/public/why-choose-summary.jpg?itok=LAqXcbBq"/>
                <Travel name="being you" text="Find your passion & find your way to be you." items={5} color="rgb(102,187,106)" img="https://www.jernejsila.com/wp-content/uploads/2016/12/Active-lifestyle.jpg"/>
            </div>
        )
    }
}

export default Exercises