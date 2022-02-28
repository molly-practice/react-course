'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// From our script tags, we get access to React and ReactDOM
// React Components are just es6 classes that extend the React.Component functionality

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  // we're going to pass a function in as a prop. the child component can call the function passed down as a prop
  // to take the action of changing stuff in the parent component 


  _createClass(IndecisionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var op = this.state.options[randomNum];
      alert(op);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      // !option means if it's an empty string
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        // this returns the index of the item if it's already in the array. if it's not in the array already it returns -1
        return 'This option already exists';
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Indecision';
      var subTitle = 'Put your life in the hands of a computer';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subTitle: subTitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    React.createElement(
      'h2',
      null,
      props.subTitle
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      'What should I do?'
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All'
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, optionText: option });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.optionText
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  // now that we're using 'this' inside of one of our functions, we should set up the constructor function  so we can bind it
  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      // prevents the default submission process where you get the full page refresh- wastes resources
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return {
          // remember in es6 that if they have the same name, we can just say error instead of error: error
          error: error
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// stateless functional component example. they are faster than regular components!
// if a component doesn't have a state, you can make it a stateless functional component
// it can't have a state, but you *can* pass it props
// Remember, these s.f.components (and also arrow functions) can't access 'this'

// you pass in 'props' which is just treated like this.props (it's just an object), and then you access data in it with props.whatever
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }

// here's how you pass props to a s.f.component 
// ReactDOM.render(<User name="Molly" age={30}/>, document.getElementById('app'));


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
