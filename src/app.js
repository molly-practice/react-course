console.log('App.js is running');

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

let count = 0;
const addOne = () => {
  count++;
  console.log('addOne');
  renderCounterApp();
};

const minusOne = () => {
  count--;
  console.log('minusOne');
  renderCounterApp();
}

const reset = () => {
  count = 0;
  console.log('Reset');
  renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();