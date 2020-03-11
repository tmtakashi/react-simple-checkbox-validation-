import React from 'react';
import Form from "./form"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    }
  }
  
  handleFormValid(bool) {
    console.log(bool)
    this.setState({ checked: bool })
  }

  render () {
    return (
      <div className="App">
        <p>Valid: {this.state.checked.toString()}</p>
        <Form validate={this.handleFormValid.bind(this)}></Form>
      </div>
    );
  }

}
export default App;
