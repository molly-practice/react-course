'use strict';

console.log('App.js is running');

var app = {
  title: 'Indecision App',
  subtitle: 'An app whose purpose is currently unknown.',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); // stops the full page refresh, lets us run code right here to handle the event

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderCounterApp();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var renderCounterApp = function renderCounterApp() {
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
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderCounterApp();
