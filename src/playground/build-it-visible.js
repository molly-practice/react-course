const app = {
  title: 'Visibility Toggle'
};

let hidden = true;

const updateStatus = () => {
  if(hidden === true) hidden = false;
  else hidden = true;
  renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>
        <button onClick={updateStatus}>{hidden === true ? 'Show details' : 'Hide details'}</button>
      </p>
      {<p>
        {hidden === false && 'Hey. These are some details you can now see!'}
      </p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderApp();