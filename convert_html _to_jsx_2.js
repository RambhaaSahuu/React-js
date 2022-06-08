//Import the react and reactdom libraries
//this is how we write in html 
//inline style 
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
    return <div>
        <label class = "label" for ="name">Enter name:</label>;
        <input id="name" type="text"/>
        <button> Submit </button>
    </div>
};

//tke the rect component and show it on the screen 
ReactDOM.render(<App />,document.querySelector('#root'));