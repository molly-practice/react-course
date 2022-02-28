class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);

    this.state = {
      visibility: false
    };
  }
  
  handleVisibilityToggle() {
    this.setState((prevState) => {
      return {
        visibility: !(prevState.visibility)
      };
    })
  }

  render() {

    return (
      <div>
        <h1>Visibility Toggle</h1>
        <p>
          <button onClick={this.handleVisibilityToggle}>{this.state.visibility ? 'Show details' : 'Hide details'}</button>
        </p>
        <p>
          {this.state.visibility === false && 'Hey. these are some details you can now see!'}
        </p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const app = {
//   title: 'Visibility Toggle'
// };

// let hidden = true;

// const updateStatus = () => {
//   if(hidden === true) hidden = false;
//   else hidden = true;
//   renderApp();
// }

// const appRoot = document.getElementById('app');

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <p>
//         <button onClick={updateStatus}>{hidden === true ? 'Show details' : 'Hide details'}</button>
//       </p>
//       {<p>
//         {hidden === false && 'Hey. These are some details you can now see!'}
//       </p>}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// }

// renderApp();