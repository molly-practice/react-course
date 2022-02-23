// app.js in src folder contains our JSX
// app.js in scripts folder is an auto generated file that contains babel transformations

// Here is where we have access to all of the features of react and react-dom
console.log('App.js is running');

// JSX- Javascript XML
// - It's a javascript syntax extension. It's provided to us by React
// - define our templates, inject our data into those templates
// JSX makes working with templates much easier than it was in the past

// Note: JSX elements MUST have a root element. You can just wrap everything in a div.
const app = {
  title: 'Indecision App',
  subtitle: 'An app whose purpose is currently unknown.',
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options.'}</p>
    <ol>
      <li>Option One</li> 
      <li>Option Two</li>
    </ol>
  </div>
);

const user = {
  name: 'Molly Novash',
  age: 30,
  location: 'Grant\'s Pass'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } 
  // note: undefined is implicitly returned if it isn't explicity returned
  // so you could say else { return undefined; } but you don't have to
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

// Here we use the document api to fetch the dom element (the div in index.html) where we want to inject the content of the 'template' variable
const appRoot = document.getElementById('app');

// Render your application.
// ReactDOM.render() takes two args- the jsx you'd like to render, and the dom element where you want to render it
ReactDOM.render(template, appRoot);