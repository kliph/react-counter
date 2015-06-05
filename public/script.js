var Counter = React.createClass({
    render: function() {
        return (
          <div className="counter">
          <div className="increment-button">
          <button>^</button>
          </div>
          0
          <div className="decrement-button">
          <button>v</button>
          </div>
          </div>

        );
    }
});

React.render(
<Counter />,
document.getElementById('content')
);
