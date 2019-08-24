import React from "react";

const OperatorButton = props => {
    console.log("Operator Button", props);
    return (
        <button onClick={() => console.log(props.operator.char)}>
            {/* Display a button element rendering the data being passed down from the parent container on props */}
            {props.operator.char}
        </button>
    );
};

export default OperatorButton;
