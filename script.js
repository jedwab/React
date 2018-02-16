var Counter1 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        console.log("render: tworzenie elementu");
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik 1: ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, "Plus 1"),
            React.createElement('button', {onClick: this.decrement}, "Minus 1")
        );
    },

    getDefaultProps: function() {
        console.log("getDefaultProps: ustawienie wartości propsów, które zostaną użyte, jeśli przy tworzeniu instancji nie zostały przekazane żadne wartości domyślne");
    },

    componentWillMount: function() {
        console.log("componentWillMount: jest wywoływana tuż przed renderowaniem, gdy odbierane są nowe propsy; używa się do przygotowania przed aktualizacją");
    },

    componentDidMount: function() {
        console.log("componentDidlMount: praca przy gotowym komponencie, możliwośc wykonania różnych manipulacji np pobrania danych");
    },

    componentWillReceiveProps: function() {
        console.log("componentWillReceiveProps: porównanie starych i nowyh propsów i zależnie od wyniku możliwośc podjęcia dalszej akcji");
    },

    shouldComponentUpdate: function() {
        console.log("shouldComponentUpdate: sprawdzenie czy dany element powinien byc przeredenderowany");
        return true;
    },

    componentWillUpdate: function() {
        console.log("componentWillUpdate: jeśli shouldComponentUpdate dało true wywoła się componentWillUpdate, powinna być wywoływana tylko do przygotowania na nadchodzące zmiany ");
    },

    componentDidUpdate: function() {
        console.log("componentDidUpdate: używane po przeredenderowaniu elementu, można dokonywać zmian w drzewie DOM");
    },

    componentWillUnmount: function() {
        console.log("componentWillUnmount: zmiany w DOM po usunięciu elementu np odpięcie eventlistenera");
    }
});

var Counter2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik 2: ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, "Plus 1"),
            React.createElement('button', {onClick: this.decrement}, "Minus 1")
        );
    }
});

var Counter3 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        console.log("render: tworzenie elementu");
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik 3: ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, "Plus 1"),
            React.createElement('button', {onClick: this.decrement}, "Minus 1")
        );
    }
});

var element = React.createElement("div", {}, 
                React.createElement(Counter1),
                React.createElement(Counter2),
                React.createElement(Counter3)
              );

ReactDOM.render(element, document.getElementById('app'));