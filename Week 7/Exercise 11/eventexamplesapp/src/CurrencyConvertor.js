import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: 'Euro'
    };
  }

  handleChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleCurrencyChange = (e) => {
    this.setState({ currency: e.target.value });
  };

  handleSubmit = () => {
    const { amount, currency } = this.state;
    const numAmount = parseFloat(amount);

    if (!numAmount || numAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    let result = 0;

    if (currency === "Euro") {
      result = numAmount * 80;
      alert(`Converting to Euro Amount is ${result}`);
    } else if (currency === "Rupees") {
      result = numAmount / 80;
      alert(`Converting to Rupee Amount is ₹${result.toFixed(2)}`);
    }
  };

  render() {
    return (
      <div>
        <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
        <label>Amount: </label>
        <input
          type="number"
          value={this.state.amount}
          onChange={this.handleChange}
        /><br /><br />
        <label>Currency: </label>
        <select value={this.state.currency} onChange={this.handleCurrencyChange}>
          <option value="Euro">Euro</option>
          <option value="Rupees">Rupees</option>
        </select><br /><br />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default CurrencyConvertor;
