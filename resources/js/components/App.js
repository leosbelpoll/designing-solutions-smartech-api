import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

import store from "./redux/store";
import Routes from "./app/Routes";
import "./index.scss";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes />
            </Router>
        </Provider>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
