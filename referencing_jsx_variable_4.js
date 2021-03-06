//Import the react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
    const buttonText = {text: 'CLick Me'};
    return ( 
        <div>
            <label className = "label" for ="name">
                Enter name:
            </label>;
            <input id="name" type="text"/>
            <button style={{backgroundcolor: 'blue', color: 'white'}}> 
                {buttonText.text}
            </button>
        </div>
    );
};

//take the react component and show it on the screen 
ReactDOM.render(<App />,document.querySelector('#root'));