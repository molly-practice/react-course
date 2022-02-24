console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'An app whose purpose is currently unknown.',
  options: []
};


const onFormSubmit = (e) => {
  e.preventDefault(); // stops the full page refresh, lets us run code right here to handle the event

  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    renderCounterApp();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderCounterApp();
}

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderCounterApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options.'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderCounterApp();