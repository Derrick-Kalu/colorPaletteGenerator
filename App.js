import React, { useState } from 'react';
import './App.css';
import './index.css';

function App() {
    const [colors, setColors] = useState([]);
    const [showHex, setShowHex] = useState(true);

    const generatePalette = () => {
        const newPalette = [];
        for (let i = 0; i < 5; i++) {
            newPalette.push(generateRandomColor());
        }
        setColors(newPalette);
    };

    const generateRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    const toggleHexDisplay = () => {
        setShowHex(!showHex);
    };

    return ( <
        div className = "app-container" >
        <
        h1 > Color Palette Generator < /h1> <
        button onClick = { generatePalette } > Generate Palette < /button> <
        button onClick = { toggleHexDisplay } > { showHex ? 'Hide Hex Codes' : 'Show Hex Codes' } <
        /button> <
        div className = "palette" > {
            colors.map((color, index) => ( <
                    div key = { index }
                    className = "color-box"
                    style = {
                        { backgroundColor: color } } >
                    {
                        showHex && < p className = "hex-code" > { color } < /p>} 
                        </div>
                    ))
            } <
            /div> <
            /div>
        );
    }

    export default App;