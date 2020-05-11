import React, { useState } from 'react';
import "../../style.css";

const Calculator = () => {

    const [result, setResult] = useState("0");

    const handleClick = (val: string) => {
        switch(val) {
            case "C" :  //clear result
                setResult("0");
                break;
            case "%": 
                if (result === "0") return;
                const percent  = parseInt(result)/100;
                setResult(percent.toString());
                break;
            case "+/-":
                if (result === "0") return;
                const isNegative = Math.sign(parseInt(result));
                const newVal = isNegative === 1 ? "-"+result : Math.abs(parseInt(result));
                setResult(newVal.toString());
                break;
            case "=":  //calculate result
                const value = eval(result || "") + "";
                setResult(value);
                break;
            default:  //set result field
                const newValue = (result === "0" ) ? val : result+val;
                setResult(newValue);
        }
    }

    return (
        <>
           <div className="calculator-container">
               <div className={result.length > 9 ? "result-bar-smaller" : "result-bar"}> 
                    {result}
               </div>

               <div className="row">
                    <div className="column first-row" onClick={e => handleClick("C")}>C</div>
                    <div className="column first-row" onClick={e => handleClick("+/-")}>+/-</div>
                    <div className="column first-row" onClick={e => handleClick("%")}>%</div>
                    <div className="column last-col" onClick={e => handleClick("/")}>/</div>
                </div>

                <div className="row">
                    <div className="column" onClick={e => handleClick("7")}>7</div>
                    <div className="column" onClick={e => handleClick("8")}>8</div>
                    <div className="column" onClick={e => handleClick("9")}>9</div>
                    <div className="column last-col" onClick={e => handleClick("*")}>*</div>
                </div>

                <div className="row">
                    <div className="column" onClick={e => handleClick("4")}>4</div>
                    <div className="column" onClick={e => handleClick("5")}>5</div>
                    <div className="column" onClick={e => handleClick("6")}>6</div>
                    <div className="column last-col" onClick={e => handleClick("-")}>-</div>
                </div>

                <div className="row">
                    <div className="column" onClick={e => handleClick("1")}>1</div>
                    <div className="column" onClick={e => handleClick("2")}>2</div>
                    <div className="column" onClick={e => handleClick("3")}>3</div>
                    <div className="column last-col" onClick={e => handleClick("+")}>+</div>
                </div>

                <div className="row">
                    <div className="column last-row" id="column-zero" onClick={e => handleClick("0")}>0</div>
                    <div className="column last-row" onClick={e => handleClick(".")}>.</div>
                    <div className="column last-col last-row" id="column-equal" onClick={e => handleClick("=")}>=</div>
                </div>


           </div>
        </>
    )
}

export default Calculator;