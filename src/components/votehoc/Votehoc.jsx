// import React from 'react'
 import React, { Component } from 'react'

function Votehoc(Orgnalcom) {
       
 class Counter extends Component {
    state={
        count:0,
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1,
        })
    }


        render() {
            return (
                <Orgnalcom count={this.state.count} increment={this.increment} />
            )
        }
    }
    
    return Counter;
}
export default Votehoc;