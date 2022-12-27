import { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../services/contact.service'

export class ContactDetails extends Component {

    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }

    loadContact = async () => {
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }

    onBack = () => {
        this.props.history.push('/contact')
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <div className='robot-details container'>
                <section>
                    <h3>Name: {contact.name}</h3>
                </section>
                <section>
                    <h3>Phone: {contact.phone}</h3>
                </section>
                <section>
                    <h3>Email: {contact.email}</h3>
                </section>
                <img src={"https://robohash.org/set_set5/" + contact.name} alt="" />
                <div className='flex column'>
                    <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
                    <Link to='/contact/5a5664025f6ae9aa24a99fde' >Next Contact</Link>
                    <button onClick={this.onBack}>Back</button>
                </div>
            </div>
        )
    }
}
