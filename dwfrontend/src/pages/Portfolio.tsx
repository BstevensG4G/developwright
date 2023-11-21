import React from 'react'
import g4g from '../assets/g4g.png'
import americounsel from '../assets/americounsel.png'
import freemerchant from '../assets/freemerchant.png'

export interface IPortfolioPageProps {}

const PortfolioPage: React.FunctionComponent<IPortfolioPageProps> = () => {
    return (
        <div className="portfolio">
            <div>
                <h2>Portfolio</h2>
                <div>
                    <h3>Going4Groceries.com</h3>
                    <img src={g4g} alt="going4groceries.com website picture" />
                    <p>PHP & MySQL project for a local grocery delivery startup in Waikoloa, HI.</p>
                    <p>Implemented project with 30,000 products and a customized delivery scheduling function</p>                    
                    <h3>Americounsel</h3>
                    <img src={americounsel} alt="americounsel website picture" />
                    <p>Flat-Rate Legal Services for a NY Lawfirm utilizing Java, Javascript, HTML</p>
                    <p>In the late 1990's was considered a revolutionary idea.</p>
                    <h3>Free Merchant</h3>
                    <img src={freemerchant} alt="freemerchant website picture" />
                    <p>First DIY business website builder for free with the ability to add customized Services
                        such as certificates and merchant card services.
                    </p>
                    <p>In the late 1990's was considered a revolutionary idea.</p>                    
                </div>
            </div>


        </div>
    );
};
export default PortfolioPage

{/* <button onClick={() => navigate('/layout/55')}>Go to layout, with a number</button> */}


// import {createComponent} from '@lit/react'
// import { ProjectCard } from './proj-card.ts'


// const ProjectCard = createComponent({
//   react: React,
//   tagName: 'proj-card',
//   elementClass: ProjectCard,
// });