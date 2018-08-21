import React, { Component } from 'react'
import './style.css'
import texture from '../../../public/bg_texture2.svg'

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <img className="texture" src={texture} alt="texture" />
      </div>
    )
  }
}

