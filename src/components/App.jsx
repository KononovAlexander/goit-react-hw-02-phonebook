import React from 'react';
import { InputContact } from "./InputContact";

// export const App = () => {
 export  class App extends React.Component { 
  state = {
    contacts: [],
    name: ''
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
            color: '#010101'
          }}
        >
          <InputContact />
        </div>
      );
    }
}
// };
