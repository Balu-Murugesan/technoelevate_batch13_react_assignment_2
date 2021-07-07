import React from 'react'
import PhpCount from "./PhpCount"
import PythonCount from "./PythonCount"
import JavaCount from "./JavaCount"
import GoCount from "./GoCount"
import "./maincount.css"
 function Maincount() {
    return (
        <div className="maindiv">
             <h1>Vote Your Language !</h1>
            <PhpCount/>
            <PythonCount/>
            <JavaCount />
            <GoCount />
        </div>
    )
}
export default Maincount