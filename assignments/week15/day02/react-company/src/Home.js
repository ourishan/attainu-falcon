import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <>
        
        <div className="row h-50 align-content-center">
            <div className="col">
              <h1 className="display-4 text-center" style={{ "font-size": "calc(4vw + 14px)" }}>AwesomeCompany.com</h1><hr className="w-75" />
            </div>
          </div>
          <div className="row flex-grow-1 align-items-center">
            <div className="col">
              <h2>Feature#1</h2>
              <hr />
              <p>Some text here.</p>
            </div>
            <div className="col">
              <h2>Feature#2</h2>
              <hr />
              <p>Some text here.</p>
            </div>
            <div className="col">
              <h2>Feature#3</h2>
              <hr />
              <p>Some text here.</p>
            </div>
            <div className="col">
              <h2>Feature#4</h2>
              <hr />
              <p>Some text here.</p>
            </div>
          </div>
        
      </>
    )
  }
}
