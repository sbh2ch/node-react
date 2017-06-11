/**
 * Created by kiost on 2017-06-11.
 */
import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDeatils from './ContactDetails';
import update from 'react-addons-update';
import ContactCreate from "./ContactCreate";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
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
        this.handleClick = this.handleClick.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    };

    componentWillMount() {
        const contactData = localStorage.contactData;
        if (contactData) {
            this.setState({
                contactData: JSON.parse(contactData)
            });
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (JSON.stringify(prevState.contactData) != JSON.stringify(this.state.contactData)) {
            localStorage.contactData = JSON.stringify(this.state.contactData);
        }
    };

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        })
    };

    handleClick(key) {
        this.setState({
            selectedKey: key
        });
        console.log(key, 'is selected');
    };

    handleCreate(contact) {
        this.setState({
            contactData: update(this.state.contactData, {$push: [contact]})
        });
    };

    handleRemove() {
        if (this.state.selectedKey < 0)
            return;

        this.setState({
            contactData: update(this.state.contactData,
                {$splice: [[this.state.selectedKey, 1]]}
            ),
            selectedKey: -1
        });
    };

    handleEdit(name, phone) {
        this.setState({
            contactData: update(this.state.contactData,
                {
                    [this.state.selectedKey]: {
                        name: {$set: name},
                        phone: {$set: phone}
                    }
                }
            )
        });
    };

    render() {
        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;
                }
            )
            return data.map((contact, i) => {
                return (<ContactInfo
                    contact={contact}
                    key={i}
                    onClick={() => {
                        this.handleClick(i);
                    }}
                />)
            });
        };

        return (
            <div>
                <h1>Contacts</h1>
                <input name="keyword" placeholder="Search" value={this.state.keyword} onChange={this.handleChange}/>
                <div>{mapToComponents(this.state.contactData)}</div>
                <ContactDeatils isSelected={this.state.selectedKey != -1}
                                contact={this.state.contactData[this.state.selectedKey]}
                                onRemove={this.handleRemove}
                                onEdit={this.handleEdit}
                />
                <ContactCreate
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}