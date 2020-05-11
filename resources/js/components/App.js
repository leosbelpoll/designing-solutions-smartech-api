import React from "react";
import ReactDOM from "react-dom";

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">App Component</div>

                        <div className="card-body">
                            <h1>React test</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vitae commodi cumque velit
                                tenetur corporis quasi obcaecati non odio
                                voluptatum asperiores dolore, deleniti culpa
                                facilis sequi inventore, esse, fuga illo
                                recusandae!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
