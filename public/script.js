var Counter = React.createClass({
    render: function() {
        return (
          <div className="counter">
            <div className="increment-button" onClick={this.incCounter}>
              <button>⇮</button>
            </div>
              0
            <div className="decrement-button" onClick={this.decCounter}>
              <button>⇮</button>
            </div>
          </div>

        );
    }
});

React.render(
<Counter />,
document.getElementById('content')
);
