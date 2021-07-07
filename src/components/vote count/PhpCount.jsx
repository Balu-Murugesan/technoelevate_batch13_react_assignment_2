import React, { Component } from 'react'
import Votehoc from '../votehoc/Votehoc';

class PhpCount extends Component {
    render() {
        let {count,increment}=this.props
        const comdiv={
            display: 'flex',
            justifyContent: 'space-around',     
            marginBottom: '10px',
            background: 'burlywood',
            border: '1px solid black',
            
        }
        return (
            <div style={comdiv}>
                <h3>{count}</h3>
                <h3>PHP</h3>
                <button onClick={()=> increment()}>Click Here</button>
            </div>
        )
    }
}
export default Votehoc(PhpCount);