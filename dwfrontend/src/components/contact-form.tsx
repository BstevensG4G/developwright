import React from "react"

const ContactForm = () => {

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

    }

    return (
        <div className="ContactForm">
            <form onSubmit={(e) => handleSubmit(e)}>

            <label>Name:</label><br />
            <input type="text" id="name" name="name" /><br />
            <label>Email:</label><br />
            <input type="email" id="email" name="email" /><br />
            <label>Question:</label><br />
            <textarea id="question" name="question"></textarea><br />
            <input type="button" value="submit"></input>
            </form>
        </div>
    )
}

export default ContactForm