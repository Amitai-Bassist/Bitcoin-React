
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { ContactFilter } from '../cmps/ContactFilter'
import { ContactList } from '../cmps/ContactList'
import { contactService } from '../services/contact.service'
// import { ContactDetails } from './ContactDetails'

export class ContactIndex extends Component {

    state = {
        contacts: null,
        filterBy: {
            name: '',
            phone: '',
        }
    }

    componentDidMount() {
        console.log('this.props:', this.props)
        this.loadContacts()
    }

    loadContacts = async () => {
        try {
            const contacts = await contactService.getContacts(this.state.filterBy)
            this.setState({ contacts })
            console.log(contacts);
        } catch (err) {
            console.log('err:', err)
        }
    }



    onRemoveContact = async (contactId) => {
        try {
            await contactService.deleteContact(contactId)
            this.setState(({ contacts }) => ({
                contacts: contacts.filter(contact => contact._id !== contactId)
            }))
        } catch (err) {
            console.log('err:', err)
        }
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }

    render() {
        const { contacts, filterBy } = this.state
        if (!contacts) return <div>Loading...</div>

        return (
            <section className='ContactList container'>
                <ContactFilter onChangeFilter={this.onChangeFilter} filterBy={filterBy}></ContactFilter>
                <Link to='/contact/edit'>Add Contact</Link>
                <ContactList history={this.props.history} onRemoveContact={this.onRemoveContact} contacts={contacts} />
               
            </section>
        )
    }
}
