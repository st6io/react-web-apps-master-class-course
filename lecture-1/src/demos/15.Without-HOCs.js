import React from 'react';
import {
  currency as currencies,
  convertCurrency,
  toFixed,
  currency,
} from '../utils';

const numberOrEmptyString = value => {
  const input = parseFloat(value);
  return Number.isNaN(input) ? '' : input;
};

const sum = (...args) =>
  toFixed(
    args.reduce((res, val) => {
      res += numberOrEmptyString(val);
      return numberOrEmptyString(res);
    }, 0),
  );

const FIFA_20_COST_IN_BGN = 139.9;

/**
 * Box Component
 */
const Box = ({ legend, children }) => (
  <fieldset>
    <legend>{legend}</legend>
    {children}
  </fieldset>
);

/**
 * SelectCurrency Component
 */
class SelectCurrency extends React.Component {
  handleChange = ({ target: { value } }) => {
    this.props.onCurrencyChange(value);
  };

  render() {
    return (
      <select value={this.props.currency} onChange={this.handleChange}>
        {Object.values(currencies).map(currency => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    );
  }
}

/**
 * CurrentAmount Component
 */
const CurrentAmount = ({ money, currency }) => (
  <div>
    Account: {money} {currency}
  </div>
);

/**
 * BuyFifa Component
 */
const BuyFifa = ({ money, currentCurrency }) => {
  const converted = convertCurrency(money, currentCurrency, currency.bgn);
  const message =
    converted >= FIFA_20_COST_IN_BGN
      ? 'You have enough funds to buy FIFA 20, go for it!!!'
      : `FIFA 20 Costs ${FIFA_20_COST_IN_BGN} BGN! Top up your account to buy it!`;

  return <div className="info">{message}</div>;
};

/**
 * DepositMoney Component
 */
class DepositMoney extends React.Component {
  topUp = ({ target }) => {
    this.props.onDeposit(target.value, this.props.currency);
  };

  render() {
    const { value, currency } = this.props;

    return (
      <div className="form">
        <label>Money in {currency}</label>
        <input value={value} onChange={this.topUp} />
      </div>
    );
  }
}

/**
 * Deposit Component
 */
class Deposit extends React.Component {
  state = {
    value: '',
    currency: '',
  };

  handleChange = (value, currency) => this.setState({ value, currency });

  handleDeposit = e => {
    e.preventDefault();

    const { currentCurrency, onDeposit } = this.props;
    const { value, currency } = this.state;
    onDeposit(convertCurrency(value, currency, currentCurrency));
    this.setState({
      value: '',
    });
  };

  render() {
    const { value, currency } = this.state;
    const bgn = convertCurrency(value, currency, currencies.bgn);
    const eur = convertCurrency(value, currency, currencies.eur);
    const usd = convertCurrency(value, currency, currencies.usd);

    return (
      <>
        <DepositMoney
          value={bgn}
          currency={currencies.bgn}
          onDeposit={this.handleChange}
        />
        <DepositMoney
          value={eur}
          currency={currencies.eur}
          onDeposit={this.handleChange}
        />
        <DepositMoney
          value={usd}
          currency={currencies.usd}
          onDeposit={this.handleChange}
        />
        <button onClick={this.handleDeposit}>Deposit</button>
      </>
    );
  }
}

/**
 * Wallet
 */
const Wallet = ({ amount, currency, onCurrencyChange }) => (
  <div className="wallet">
    <CurrentAmount money={amount} currency={currency} />
    <SelectCurrency currency={currency} onCurrencyChange={onCurrencyChange} />
  </div>
);

/**
 * Account Component
 */
export class Account extends React.Component {
  state = {
    amount: 0,
    currency: currencies.bgn,
  };

  handleDeposit = deposit => {
    this.setState(({ amount }) => ({
      amount: sum(amount, deposit),
    }));
  };

  handleCurrencyChange = currency => {
    this.setState(({ currency: currentCurrency, amount }) => ({
      currency,
      amount: convertCurrency(amount, currentCurrency, currency),
    }));
  };

  render() {
    const { amount, currency } = this.state;

    return (
      <div className="form">
        <Box legend="Deposit">
          <Deposit currentCurrency={currency} onDeposit={this.handleDeposit} />
        </Box>
        <Box legend="Wallet">
          <Wallet
            currency={currency}
            amount={amount}
            onCurrencyChange={this.handleCurrencyChange}
          />
        </Box>
        <Box legend="Info">
          <BuyFifa money={amount} currentCurrency={currency} />
        </Box>
      </div>
    );
  }
}
