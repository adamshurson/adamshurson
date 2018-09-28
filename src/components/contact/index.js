import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return <div ref={this.props.contact} className="flex flex-col min-h-screen pt-8">
            <h2 className="font-accent text-black hover:text-red">Contact</h2>

        </div>
    }
}
export default Contact;