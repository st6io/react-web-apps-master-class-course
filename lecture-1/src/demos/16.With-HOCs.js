import React from 'react';
import { currency as currencies, convertCurrency, toFixed } from '../utils';

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
 * withCurrencyConversion HOC
 */
const withCurrencyConversion = (
  defaultCurrency,
  valueName = 'value',
) => WrappedComponent => {
  const hocComponent = props => {
    const { currency, currentCurrency, [valueName]: value } = props;
    const convertedValue = convertCurrency(
      value,
      currentCurrency,
      currency || defaultCurrency,
    );

    const withValue = { [valueName]: convertedValue };

    return <WrappedComponent {...props} {...withValue} />;
  };

  hocComponent.displayName = `WithCurrencyConversion(${WrappedComponent.displayName ||
    ''})`;

  return hocComponent;
};

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
const BuyFifa = ({ money }) => {
  const message =
    money >= FIFA_20_COST_IN_BGN
      ? 'You have enough funds to buy FIFA 20, go for it!!!'
      : `FIFA 20 Costs ${FIFA_20_COST_IN_BGN} BGN! Top up your account to buy it!`;

  return <div className="info">{message}</div>;
};

const BuyFifaWithCurrency = withCurrencyConversion(currencies.bgn, 'money')(
  BuyFifa,
);

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

const DepositMoneyWithCurrency = withCurrencyConversion()(DepositMoney);

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
    return (
      <>
        <DepositMoneyWithCurrency
          value={value}
          currency={currencies.bgn}
          currentCurrency={currency}
          onDeposit={this.handleChange}
        />
        <DepositMoneyWithCurrency
          value={value}
          currency={currencies.eur}
          currentCurrency={currency}
          onDeposit={this.handleChange}
        />
        <DepositMoneyWithCurrency
          value={value}
          currency={currencies.usd}
          currentCurrency={currency}
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
          <BuyFifaWithCurrency money={amount} currentCurrency={currency} />
        </Box>
      </div>
    );
  }
}
