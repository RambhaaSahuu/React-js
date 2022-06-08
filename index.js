//Import the react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
    return <div>Hi There!</div>;
};

//tke the rect component and show it on the screen 
ReactDOM.render(<App />,document.querySelector('#root'));