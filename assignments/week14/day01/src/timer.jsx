class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 0.1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 100);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          Seconds: {this.state.seconds.toFixed(1)}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Timer />,
    document.getElementById('timer')
  );