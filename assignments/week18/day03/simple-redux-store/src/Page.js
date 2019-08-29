import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { squareAction, cubeAction, rootAction } from "./actions";

class Page extends PureComponent {
    constructor(props) {
        super(props);
        this.inVal = React.createRef();
    }
    render() {
        const { value, squareAction, cubeAction, rootAction } = this.props;
        return (
            <div>
                <input type="number" ref={this.inVal} ></input>
                <button onClick={_ => squareAction(this.inVal.current.value)}>square</button>
                <button onClick={_=>cubeAction(this.inVal.current.value)}>cube</button>
                <button onClick={_=>rootAction(this.inVal.current.value)}>root</button>
                <h1>{value}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    value: state.value
});

const mapDispatchToProps = dispatch => ({
    squareAction: (payload) => dispatch(squareAction(payload)),
    cubeAction: (payload) => dispatch(cubeAction(payload)),
    rootAction: (payload) => dispatch(rootAction(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);
