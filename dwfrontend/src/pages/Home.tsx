import React from 'react'

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {

    return (
        <div className="home">
            <div>
                <h2>Software Engineering</h2>
                <p>Taking your business requirements and transforming them into a functional frontend
                    and backend that will take your future needs into account. Providing professional communication
                    throughout the process with interactive processing from concept, wireframing, UX/UI Design,
                    data modeling & engineering and testing. We will explain the steps thoroughly and visually
                    and give you time to ingest the knowledge. Giving ample time to ingest the effects of engineering
                    choices insures less likelyhood with future re-engineering costs. 
                </p>                
            </div>
            <div>
                <h2>Concept through Prototyping</h2>
                <p>conceptualizing with markup documents that include UML diagrams and low-fidelity wireframes to
                    visually display your thoughts of customer interactions and data flow. We've created a templated
                    process to work with you through the initial designs to speed communication and save you money!
                    Creating initial specifications assists in consistant project startup costs and gives confidence in
                    the ongoing process.
                </p>
            </div>

            <div>
                <h2>Data Engineering</h2>
                <p>Often multiple data storage solutions are necessary in an end product transition planning for project
                    data engineering steps and implementations for various current and future needs can have and effect
                    upon 
                </p>
            </div>


        </div>
    );
};
export default HomePage;