import { Link } from "react-router-dom"

export function ContactPreview({ contact, onRemoveContact }) {


    // const previewStyle = { backgroundImage: `url(https://robohash.org/set_set5/)` }
    
    return (
        // <section style={previewStyle} className="contact-preview">
        <section className="contact-preview">
            <img className="img-preview" src={`https://robohash.org/set_set5/${contact._id}&80x80`} alt="" />
            <Link to={`/contact/${contact._id}`} className="info">
                <h2>{contact.name}</h2>
                <h4>{contact.phone}</h4>
            </Link>
            <section>
                <section className="actions">
                    <button>trasnfer coins</button>
                    <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
                    <button onClick={() => onRemoveContact(contact._id)}>X</button>
                </section>
            </section>
        </section>
    )
}
