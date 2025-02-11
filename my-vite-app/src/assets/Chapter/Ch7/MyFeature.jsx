import React, { Component } from 'react'
import MyButton from './MyButton';

export default class MyFeature extends Component {
    state ={
        click : 0,
        disabled : false,
        text : ""
    };

    onClick = ()=> {
        this.setState(state => ({...state, click : state.click + 1}))
    }


  render() {
    return<MyButton onClick={this.onClick} {...this.state}/>
  }

  static getDerivedStateFromProps({disabled,text},state){
     return{
        ...state,disabled,text
     }
  }
}

MyFeature.defaultProps = {
    text : "Button"
}
