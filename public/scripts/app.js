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
var app = {
  title: 'Indecision App',
  subtitle: 'An app whose purpose is currently unknown.',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options.'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Option One'
    ),
    React.createElement(
      'li',
      null,
      'Option Two'
    )
  )
);

var user = {
  name: 'Molly Novash',
  age: 30,
  location: 'Grant\'s Pass'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
  // note: undefined is implicitly returned if it isn't explicity returned
  // so you could say else { return undefined; } but you don't have to
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

// Here we use the document api to fetch the dom element (the div in index.html) where we want to inject the content of the 'template' variable
var appRoot = document.getElementById('app');

// Render your application.
// ReactDOM.render() takes two args- the jsx you'd like to render, and the dom element where you want to render it
ReactDOM.render(template, appRoot);
