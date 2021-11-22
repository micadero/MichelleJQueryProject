function clock() {
    const element = (<h3>{new Date().toLocaleTimeString()}</h3>);
    ReactDOM.render(element, document.getElementById('time'));
}

setInterval(clock, 1000);