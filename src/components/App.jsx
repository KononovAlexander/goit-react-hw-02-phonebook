import React, {Component} from 'react';
import {Box} from './Box'
import { Form } from './Form';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
import * as css from './Form.styled';



 export  class App extends Component { 
  state = {
    contacts: [],
    name: '',
    filter: ''
    }
    
    addContact = data => {
      this.state.contacts.find(contact => contact.name === data.name) ? alert(`${data.name} is allready in contacts`):
      this.setState(prevState => ({ 
        contacts: [...prevState.contacts, data]
        
      }));
    }

    deleteContact = id => {
      // console.log('id: ', id);
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id )
      }))

    }

    changeFilter = (event) => {
      this.setState({filter: event.currentTarget.value })
      console.log('filteredContacts: ', this.filteredContacts);

    }
  
    render() {
      return (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
            flexDirection: 'column'
          }}
        >
          <div>
            <css.Titleh2>Phonebook</css.Titleh2>
          <Form onSubmit={this.addContact}/>

          </div>
          <Box width={400}>
          <css.Titleh2>Contacts</css.Titleh2>
            <Filter value={this.state.filter} onChange={this.changeFilter}  />
            <Contacts 
              contact={this.state.contacts} 
              filter={this.state.filter} 
              deleteContact={this.deleteContact}/>
          </Box>
        </div>
      );
    }
}
