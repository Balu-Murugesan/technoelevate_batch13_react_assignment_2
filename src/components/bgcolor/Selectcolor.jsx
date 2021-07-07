import React, { Component } from 'react'
import "./selectcol.css"

export default class Selectcolor extends Component {
    changecolor=()=>{
        var x=document.getElementById("bgcolor").value;
        console.log(x);
        document.body.style.backgroundColor=x;
        document.getElementById("h1tag").style.color="white";
         document.getElementById("h3tag").style.color="white";

    }
    render() {
        return (
            <div id="col">
                <h2 id="h1tag">Hello, World !</h2>
                <h3 id="h3tag">What color?</h3>
                <select onChange={this.changecolor} id="bgcolor">
                    <option value="" selected disabled hidden>CHOOSE BACKGROUND COLOR</option>
                    <option value="red">Red</option>
                    <option value="blue">blue</option>
                    <option value="burlywood">burlywood</option>
                    <option value="green">green</option>
                    <option value="aquamarine">aquamarine</option>
                    <option Value="chocolate" value="chocolate">chocolate</option>
                </select>
            </div>
        )
    }
}
