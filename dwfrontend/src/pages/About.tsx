import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = () => {
    const [message, setMessage] = useState('');
    const { number } = useParams();

    useEffect(() => {
        if (number)
        {
            setMessage('The number is ' + number);
        }
        else{
            setMessage('There is no number');
        }
    }, [number])


    return (
        <div>
            <p>This is the About Page.</p>
            <p>{message}</p>
        </div>
    );
};
export default AboutPage;