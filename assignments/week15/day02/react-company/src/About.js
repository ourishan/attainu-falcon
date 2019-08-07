import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <>

                <div className="row h-25 align-content-center">
                    <div className="col">
                        <h1 className="display-4 text-center" style={{ "font-size": "calc(4vw + 14px)" }}>About Us</h1>
                        <hr className="w-75" />
                    </div>
                </div>
                <div className="row mx-auto w-75 mb-2">
                    <div className="col">
                        <div className="card flex-row text-left">
                            <div className="card-body">
                                <h5 className="card-title">CEO</h5>
                                <p className="card-text">Some text about CEO here.</p>
                            </div>
                            <img className="card-img-right rounded-right" src="https://source.unsplash.com/random/180x180" alt="Card cap" height="180" />
                        </div>
                    </div>
                </div>
                <div className="row mx-auto w-75 mb-2">
                    <div className="col">
                        <div className="card flex-row text-left">
                            <div className="card-body">
                                <h5 className="card-title">CTO</h5>
                                <p className="card-text">Some text about CTO here.</p>
                            </div>
                            <img className="card-img-right rounded-right" src="https://source.unsplash.com/random/180x180" alt="Card cap" height="180" />
                        </div>
                    </div>
                </div>
                <div className="row mx-auto w-75 mb-4">
                    <div className="col">
                        <div className="card flex-row text-left">
                            <div className="card-body">
                                <h5 className="card-title">COO</h5>
                                <p className="card-text">Some text about COO here.</p>
                            </div>
                            <img className="card-img-right rounded-right" src="https://source.unsplash.com/random/180x180" alt="Card cap" height="180" />
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
