import React from 'react'


export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = () => {
    return (
        <div className="about">
            <div>
                <h2>Honesty & Integrity</h2>
                <p>Honesty is of utmost importance and at the top of our list of morals. Integrity, we never speak of your project
                    outside of out secure communications channels. Encryption and data abstraction are the tools we use to assist
                    in keep your data known only to you or your customers data exclusive to them. Years of working in a trusted
                    position within banking and insurance industries helps with assurance that our business is keeping your 
                    business information safe. We do what we say we are going to do.
                </p>                
            </div>
            <div>
                <h2>Dedication</h2>
                <p>We dedicate our efforts to delivering your project on time and on budget. Our integrity keeps us dedicated so
                    that your project doesn't suffer. We work diligently to ensure your project never suffers from a lack of resources.
                </p>
            </div>
            <div>
                <h2>Standards</h2>
                <p>We expect clear written instructions that use and work towards standards
                </p>
            </div>
        </div>
    );
};
export default AboutPage;