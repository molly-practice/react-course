'use strict';

// app.js in src folder contains our JSX
// app.js in scripts folder is an auto generated file that contains babel transformations

// Here is where we have access to all of the features of react and react-dom
console.log('App.js is running');

// JSX- Javascript XML
// - It's a javascript syntax extension. It's provided to us by React
// - define our templates, inject our data into those templates
// JSX makes working with templates much easier than it was in the past

// Note: JSX elements MUST have a root element. You can just wrap everything in a div.
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info.'
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Molly Novash'
  ),
  React.createElement(
    'p',
    null,
    'Age: 30'
  ),
  React.createElement(
    'p',
    null,
    'Location: Grant\'s Pass'
  )
);

// Here we use the document api to fetch the dom element (the div in index.html) where we want to inject the content of the 'template' variable
var appRoot = document.getElementById('app');

// Render your application.
// ReactDOM.render() takes two args- the jsx you'd like to render, and the dom element where you want to render it
ReactDOM.render(templateTwo, appRoot);
