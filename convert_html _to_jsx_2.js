//Import the react and reactdom libraries
//this is how we write in html 
//inline style 
//it will show error.it will not run.
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
    return <div>
        <label class = "label" for ="name">Enter name:</label>;
        <input id="name" type="text"/>
        <button style="background-color: blue; color: white:"> Submit </button>
    </div>
};

//take the react component and show it on the screen 
ReactDOM.render(<App />,document.querySelector('#root'));