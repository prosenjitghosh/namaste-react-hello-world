const elementFirst = React.createElement("h1",
    {style:{textAlign:"center"}},
    "Hello World New"
);
const elementSecond = React.createElement("div",
    {className:'center-color'},
    "Hello React New"
);
const element = React.createElement("div",
    {className:'center-color'},
    [elementFirst,elementSecond]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);