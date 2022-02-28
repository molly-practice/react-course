// From our script tags, we get access to React and ReactDOM
// React Components are just es6 classes that extend the React.Component functionality

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: []
    };
  }

  // we're going to pass a function in as a prop. the child component can call the function passed down as a prop
  // to take the action of changing stuff in the parent component 
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const op = this.state.options[randomNum];
      alert(op);
  }

  handleAddOption(option) {
    // !option means if it's an empty string
    if(!option) {
      return 'Enter valid value to add item';

    } else if((this.state.options.indexOf(option)) > -1) {
      // this returns the index of the item if it's already in the array. if it's not in the array already it returns -1
      return 'This option already exists'
    } 

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  render() {
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of a computer';

    return (
      <div>
      <Header title={title} subTitle={subTitle}/>
      <Action 
        hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}
      />
      <Options 
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
      />
      <AddOption 
        handleAddOption={this.handleAddOption}
      />
      </div>
    );
  }
}

class Header extends React.Component {
// react components require the render method to be defined
render() {
  // render returns some jsx
  return (
    <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subTitle}</h2>
    </div>
  );
}
}

class Action extends React.Component {
  
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map((option) => <Option key={option} optionText={option} />)}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
    <div>
      {this.props.optionText}
    </div>
    );
  }
}

class AddOption extends React.Component {
  // now that we're using 'this' inside of one of our functions, we should set up the constructor function  so we can bind it
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    // prevents the default submission process where you get the full page refresh- wastes resources
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    
    this.setState(() => {
      return {
        // remember in es6 that if they have the same name, we can just say error instead of error: error
        error
      };
    })
  }
  render() {
    return (
    <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"></input>
        <button>Add option</button>
      </form>
    </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));