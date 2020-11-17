import React, { Component } from 'react'

function fn(ref) {
    console.log(ref);
}
export default React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton" onClick={() => fn(ref)}>
        {props.children}
    </button>
));