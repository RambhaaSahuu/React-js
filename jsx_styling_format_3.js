//Import the react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
    return <div>
        <label classname = "label" for ="name">
            Enter name:
        </label>;
        <input id="name" type="text"/>
        <button style={{backgroundcolor: 'blue', color: 'white'}}> 
            Submit 
        </button>
    </div>
};

//take the react component and show it on the screen 
ReactDOM.render(<App />,document.querySelector('#root'));