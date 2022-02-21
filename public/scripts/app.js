// Here is where we have access to all of the features of react and react-dom
console.log('App.js is running');

// JSX- Javascript XML
// - It's a javascript syntax extension. It's provided to us by React
// - define our templates, inject our data into those templates
// JSX makes working with templates much easier than it was in the past
// var template = <p>This is JSX from app.js</p>;

var template = /*#__PURE__*/React.createElement("h1", {
  id: "someid"
}, " This is a JSX element in app.js ");

// Here we use the document api to fetch the dom element (the div in index.html) where we want to inject the content of the 'template' variable
var appRoot = document.getElementById('app');

// Render your application.
// ReactDOM.render() takes two args- the jsx you'd like to render, and the dom element where you want to render it
ReactDOM.render(template, appRoot);