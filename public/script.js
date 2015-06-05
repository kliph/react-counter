var Counter = React.createClass({
    render: function() {
        return (
                <div className="counter">
                I'm a Counter, hello there.
</div>
        );
    }
});

React.render(
<Counter />,
document.getElementById('content')
);
