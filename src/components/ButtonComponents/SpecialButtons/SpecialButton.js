import React from "react";

export const SpecialButton = props => {
    return (
        <button onClick={() => console.log(props.text)}>
            {/* Display a button element rendering the data being passed down from the parent container on props */}
            {props.text}
        </button>
    );
};

export default SpecialButton;
