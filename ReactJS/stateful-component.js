
class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "Kamila"
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };

// ......................................................
// accessing component state - alternate way

  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      const name = this.state.name
      return (
        <div>
          <h1>{name}</h1>
        </div>
      );
    }
  };
  // ......................................................
  // setting state with this.State

  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({name: "React Rocks!"})
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };