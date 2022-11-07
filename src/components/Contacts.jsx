import * as css from './Form.styled';

export const Contacts = ({contact, filter, deleteContact}) => {

    let normalizedFilter = filter.toLowerCase();

    let filteredContacts = contact.filter((contact) =>  
    contact.name.toLowerCase().includes(normalizedFilter));

    // const deleteContact = (event) => {
    //         console.log('target:', event.currentTarget.key);
    // }

    return (
            <css.List>
                {filteredContacts.map(contact => {  
                    return (<li 
                        key={contact.id} 
                        >{contact.name}: {contact.number}
                    <css.Button 
                        onClick={() => {deleteContact(contact.id)}} 
                        style={{ width: '22%', marginLeft:'10px' }}>Delete</css.Button></li>)
                })}
            </css.List>
        )                                      
    }
