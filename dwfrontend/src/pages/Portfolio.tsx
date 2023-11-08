import React from 'react'

export interface IPortfolioPageProps {}

const PortfolioPage: React.FunctionComponent<IPortfolioPageProps> = () => {
    return (

        <div>
            <p>This is the Portfolio Page.</p>
            {/* <button onClick={() => navigate('/layout/55')}>Go to layout, with a number</button> */}
        </div>
    );
};
export default PortfolioPage
// import {createComponent} from '@lit/react'
// import { ProjectCard } from './proj-card.ts'


// const ProjectCard = createComponent({
//   react: React,
//   tagName: 'proj-card',
//   elementClass: ProjectCard,
// });