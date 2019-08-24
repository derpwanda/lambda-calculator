import React from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers";

const Display = props => {
    console.log("Display", props);
    return (
        <div className='display'>
            {/* Display any props data here */}
            {props.number}
            <Numbers />
        </div>
    );
};

export default Display;
