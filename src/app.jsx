import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountDue: '' ,
      amountReceived: '',
      changeDue: '',
      twenties: '',
      tens: '',
      fives: '',
      ones: '',
      quarters: '',
      dimes: '',
      nickels: '',
      pennies: '',
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var received = parseFloat(this.state.amountReceived);
    var due = parseFloat(this.state.amountDue);
    var total = received - due;
    var change = total.toFixed(2);
    var twenties1 = 0;
    var tens1 = 0;
    var fives1 = 0;
    var ones1 = 0;
    var quarters1 = 0;
    var dimes1 = 0;
    var nickels1 = 0;
    var pennies1 = 0;

   this.setState({
     changeDue: change
   })

   twenties1 = Math.floor(change/20);
   change = (change % 20);
   this.setState({
     twenties: twenties1
   })

   tens1 = Math.floor(change/10);
   change = (change % 10);
   this.setState({
     tens: tens1
   })

   fives1 = Math.floor(change/5);
   change = (change % 5);
   this.setState({
     fives: fives1
   })
    
   ones1 = Math.floor(change/1);
   change = (change % 1);
   this.setState ({
     ones: ones1
   })

   quarters1 = Math.floor(change/0.25);
   change = (change % 0.25);
   this.setState({
     quarters: quarters1
   })

   dimes1 = Math.floor(change/0.10);
   change = (change % 0.10);
    this.setState({
      dimes: dimes1
    })
   
   nickels1 = Math.floor(change/0.05);
   change = (change % 0.05);
    this.setState({
      nickels: nickels1
    })
    
   pennies1 = Math.round(change/0.01);
    this.setState({
      pennies: pennies1
    })
  };

  render() {
    return(
<div>
  <h1>Change Calculator</h1>
  <hr/>
  <form>
  <div class="form-group">
    <label>How much is due?</label>
    <input type="number" name='amountDue' step='0.01' value={this.state.amountDue} placeholder="Amount due" onChange={this.handleChange} />
  </div>
  <div class="form-group">
    <label>How much was recieved?</label>
    <input type="number" name='amountReceived' step='0.01' value={this.state.amountReceived} placeholder="Amount Recieved" onChange={this.handleChange}/>
  </div>
  <button className="btn btn-primary" type="submit" id="button" onClick={this.handleSubmit}>Calculate</button>
  </form>
  <div className='output alert alert-success' id='output' role='alert' value={this.state.changeDue}>
          <h3>The total change due is ${this.state.changeDue}</h3>
        </div>
        <div className='well'>
          <h1>Twenties</h1>
          <p className="change">{this.state.twenties}</p>
        </div>
        <div className='well'>
          <h1>Tens</h1>
          <p className="change">{this.state.tens}</p>
        </div>
        <div className='well'>
          <h1>Fives</h1>
          <p className="change">{this.state.fives}</p>
        </div>
        <div className='well'>
          <h1>Ones</h1>
          <p className="change">{this.state.ones}</p>
        </div>
        <div className='well'>
          <h1>Quarters</h1>
          <p className="change">{this.state.quarters}</p>
        </div>
        <div className='well'>
          <h1>Dimes</h1>
          <p className="change">{this.state.dimes}</p>
        </div>
        <div className='well'>
          <h1>Nickels</h1>
          <p className="change">{this.state.nickels}</p>
        </div>
        <div className='well'>
          <h1>Pennies</h1>
          <p className="change">{this.state.pennies}</p>
        </div>
</div>
    )}
}

export default App;
