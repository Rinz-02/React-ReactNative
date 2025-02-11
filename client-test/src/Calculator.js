import { useState } from "react";

export default function Calculator(){
    return(<div className="main">
    <div className="container">
        <div className="Text">
            <input type="text" className="text-input"/>
        </div>
        <div className="button-container">

                <button value="AC">AC</button>
                <button value="DE">DE</button>
                <button value=".">.</button>
                <button value="/">/</button>
           

                <button value="7">7</button>
                <button value="8">8</button>
                <button value="9">9</button>
                <button value="*">*</button>
           

                <button value="4">4</button>
                <button value="5">5</button>
                <button value="6">6</button>
                <button value="+">+</button>
           

                <button value="1">1</button>
                <button value="2">2</button>
                <button value="3">3</button>
                <button value="-">-</button>
           

                <button value="00">00</button>
                <button value="0">0</button>
                <button value="=">=</button>
           
        

        </div>
    </div>
    </div>)
}