import React from 'react'

const Keypad = ({ onClick }) => {

    const clicked = e => {
        onClick(e.target.value)
    }

    return(
        <div className="Keypad">
            <button className="ac" value="AC" onClick={clicked}>{"AC"}</button>
            <button className="posneg" value="+/-" onClick={clicked}>{"+/-"}</button>
            <button className="percent" value="%" onClick={clicked}>{"%"}</button>
            <button className="divide" value="/" onClick={clicked}>{"÷"}</button>
            <button className="seven" value={7} onClick={clicked}>{7}</button>
            <button className="eight" value={8} onClick={clicked}>{8}</button>
            <button className="nine" value={9} onClick={clicked}>{9}</button>
            <button className="mult" value="*" onClick={clicked}>{"x"}</button>
            <button className="four" value={4} onClick={clicked}>{4}</button>
            <button className="five" value={5} onClick={clicked}>{5}</button>
            <button className="six" value={6} onClick={clicked}>{6}</button>
            <button className="sub" value="-" onClick={clicked}>{"-"}</button>
            <button className="one" value={1} onClick={clicked}>{1}</button>
            <button className="two" value={2} onClick={clicked}>{2}</button>
            <button className="three" value={3} onClick={clicked}>{3}</button>
            <button className="plus" value="+" onClick={clicked}>{"+"}</button>
            <button className="zero" value={0} onClick={clicked}>{0}</button>
            <button className="decimal" value="." onClick={clicked}>{"."}</button>
            <button className="equal" value="=" onClick={clicked}> {"="}</button>
        </div>
    )   
}

export default Keypad