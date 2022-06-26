import './style.css'
import React, { Component } from "react";

function data(props) {

    return (
       <>
       {props.map((el) => {
        <div className="items" key={el.phone}>
            <p>{props.name}</p>
            <p>{props.phone}</p>
        </div>
       })}
       </>
    )
}
export default data