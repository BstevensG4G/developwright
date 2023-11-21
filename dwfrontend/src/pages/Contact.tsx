import React from 'react'
import ContactForm from '../components/contact-form';

export interface IContactPageProps {}

const ContactPage: React.FunctionComponent<IContactPageProps> = () => {

    return (
        <div className="contact">
            <h3>Contact Us.</h3>
            <p>Inquiries about our Services are welcome. Please fill out this form and press submit and welcome
                will return your query shortly!
            </p>
            <ContactForm />
        </div>
    )
}
export default ContactPage;