/**
 * Created by kiost on 2017-06-11.
 */
import React from 'react';

export default class ContactDetails extends React.Component {
    render() {
        const details = (<div>
            <p>{this.props.contact.name}</p>
            <p>{this.props.contact.phone}</p>
        </div>);
        const blank = (<div>not selected</div>);
        return (
            <div><h2>details</h2>{this.props.isSelected ? details : blank}</div>
        )
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    }
}