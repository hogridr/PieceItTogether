import React from 'react';
import '../styles/EvalBarStyles.css';

interface EvalbarProps {
    value: number; // number (0.0 for tic tac toe) or M<mate in m moves> if win for either side
}

const EvalBar = (props: EvalbarProps) => {
    const evalStyleClass = props.value >= 0.0? "black-eval-number" : "white-eval-number"; // Try to get props.value to be +=intLimit if a win is possible
    // const evalDisplay = props.movesToWin !== undefined? "M" + props.movesToWin : Math.abs(props.value).toFixed(props.value >= 10.0? 0 : 1);

    let evalBarHeight;
    let evalDisplay;

    if (props.value >= 10000.0) {
        evalBarHeight = "100%";
        evalDisplay = "M" + (props.value-10000);
    } else if (props.value <= -10000.0) {
        evalBarHeight = "0%";
        evalDisplay = "M" + (-(props.value+10000));
    } else {
        evalBarHeight = (0.9*Math.tanh(0.02*props.value*(Math.abs(props.value)+7))+1)/2 * 100 + "%";
        evalDisplay = Math.abs(props.value).toFixed(props.value >= 10.0? 0 : 1);
    }

    return (
        <div className="eval-bar">
            <div style={{height: evalBarHeight}} className="eval-bar-height"></div>
            <span className={evalStyleClass}>{evalDisplay}</span>
        </div>
    );
};

export default EvalBar;