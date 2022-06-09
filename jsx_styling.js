//Import the react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText(){
    return 'Click on me';
}
// create a react component
const App = () => {
    const buttonText = 'CLick Me';
    return ( 
        <div>
            <label className = "label" for ="name">
                Enter name:
            </label>;
            <input id="name" type="text"/>
            <button style={{backgroundcolor: 'blue', color: 'white'}}> 
                {getButtonText}
            </button>
        </div>
    );
};

//take the react component and show it on the screen 
ReactDOM.render(<App />,document.querySelector('#root'));