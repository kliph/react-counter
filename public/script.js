var App = React.createClass({
  getInitialState: function() {
    return {counter: 0};
  },
  incCounter: function() {
    this.setState({counter: (this.state.counter + 1)});
  },
  decCounter: function() {
    this.setState({counter: (this.state.counter - 1)});
  },
  render: function() {
    return (
    <div className="app">
      <Counter counter={this.state.counter} dec={this.decCounter} inc={this.incCounter} />
    </div>
    );
  }
});

var Counter = React.createClass({
    render: function() {
        return (
          <div className="counter">
            <div className="increment-button" onClick={this.props.inc}>
              <button>⇮</button>
            </div>
              {this.props.counter}
            <div className="decrement-button" onClick={this.props.dec}>
              <button>⇮</button>
            </div>
          </div>

        );
    }
});

React.render(
  <App />,
  document.getElementById('content')
);
