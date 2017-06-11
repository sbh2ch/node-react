/**
 * Created by kiost on 2017-06-11.
 */
import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactData: [{
                name: 'Abet',
                phone: '010-5555-5555'
            }, {
                name: 'Zet',
                phone: '010-5555-4444'
            }, {
                name: 'winter',
                phone: '010-5555-1234'
            }, {
                name: 'bzone',
                phone: '010-4423-4444'
            }]
        }
    };

    render() {
        const mapToComponents = (data) => {
            return data.map((contact, i) => {
                return (<ContactInfo contact={contact} key={i}/>)
            });
        };

        return (
            <div>
                <h1>Contacts</h1>
                <div>{mapToComponents(this.state.contactData)}</div>
            </div>
        );
    }
}