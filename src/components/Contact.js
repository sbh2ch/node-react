/**
 * Created by kiost on 2017-06-11.
 */
import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            contactData: [{
                name: 'Abet',
                phone: '010-5555-5555'
            }, {
                name: 'Zet',
                phone: '010-5555-4444'
            }, {
                name: 'Winter',
                phone: '010-5555-1234'
            }, {
                name: 'Bzone',
                phone: '010-4423-4444'
            }]
        };

        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        })
    }

    render() {
        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;
                }
            )
            return data.map((contact, i) => {
                return (<ContactInfo contact={contact} key={i}/>)
            });
        };

        return (
            <div>
                <h1>Contacts</h1>
                <input name="keyword" placeholder="Search" value={this.state.keyword} onChange={this.handleChange}/>
                <div>{mapToComponents(this.state.contactData)}</div>
            </div>
        );
    }
}