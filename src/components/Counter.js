import React, { Component } from 'react'
//sayıyı burda tutucam sayı statte state de counterReducer dan geliyor olacak bu noktada uygulamamı redux a bağlayacağım 
import { connect } from 'react-redux'


class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
      </div>
    )
  }
}

function mapStateProps(state){ //state reducerdan geliyor 
  return {counter: state.counterReducer};//state i counterReducerdan çekiyorum
}

export default connect(mapStateProps)(Counter);
// counter ın proplarına state i bağla demek