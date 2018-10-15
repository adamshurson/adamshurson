import React from 'react';
import emailjs from 'emailjs';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            
        };
    }
    render() {
        return <div ref={this.props.contact} className="flex flex-col min-h-screen pt-8">
            <h2 className="font-accent text-black hover:text-red">Contact</h2>
            <form className="flex-1 flex flex-col items-center justify-center text-black" name="contact" method="POST" netlify>
                <p className="flex items-center p-4">
                    <label>Your Name: <input className="ml-2 text-grey-darker hover:text-black focus:text-black bg-transparent border-b-2 border-grey-darker focus:border-black hover:border-black focus:outline-none" type="text" name="name" /></label>
                </p>
                <p className="flex items-center p-4">
                    <label>Your E-mail: <input className="ml-2 text-grey-darker hover:text-black focus:text-black bg-transparent border-b-2 border-grey-darker focus:border-black hover:border-black focus:outline-none" type="email" name="email" /></label>
                </p>
                <p className="flex items-center p-4">
                    <label>Message: <input className="ml-2 text-grey-darker hover:text-black focus:text-black bg-transparent border-b-2 border-grey-darker focus:border-black hover:border-black focus:outline-none" type="text" name="message" /></label>
                </p>
                <p className="flex items-center pt-4">
                    <button className="px-4 py-2 text-grey-darker hover:text-black focus:text-black bg-transparent border-2 border-grey-darker focus:border-black hover:border-black focus:outline-none" type="submit">Send</button>
                </p>
            </form>
        </div>
    }
}
export default Contact;