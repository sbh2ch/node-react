/**
 * Created by kiost on 2017-06-11.
 */
import React from 'react'

export default class ContactInfo extends React.Component {
    render() {
        return (
            <div>{this.props.contact.name}</div>
        )
    }
}
