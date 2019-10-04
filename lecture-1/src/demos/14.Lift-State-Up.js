import React from 'react';

const EUR_TO_BGN_RATE = 1.956;

const convertToEur = bgn => bgn / EUR_TO_BGN_RATE;
const convertToBgn = eur => eur * EUR_TO_BGN_RATE;

const toFixed = (value, precision = 2) => {
  const f = 10 ** precision;
  return Math.round(value * f) / f;
};

const numberOrEmptyString = value => {
  const input = parseFloat(value);
  return Number.isNaN(input) ? '' : input;
};

const convertValue = (value, convert) => {
  const input = numberOrEmptyString(value);
  if (!input) {
    return input;
  }

  const converted = convert(input);
  return toFixed(converted);
};

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

const CurrentAmount = ({ bgn }) => <div>Account: {bgn} BGN</div>;

const BuyFifa = ({ bgn }) => {
  const message =
    bgn >= FIFA_20_COST_IN_BGN
      ? 'You have enough funds to buy FIFA 20, go for it!!!'
      : 'Top up your account to buy FIFA20!';

  return <div>{message}</div>;
};

class DepositMoney extends React.Component {
  onChange = ({ target }) => {
    this.props.onDeposit(target.value, this.props.currency);
  };

  render() {
    const { value, currency } = this.props;

    return (
      <div className="form">
        <label>Money in {currency}</label>
        <input value={value} onChange={this.onChange} />
      </div>
    );
  }
}

const getCurrencyValue = (value, currency, targetCurrency, convert) =>
  currency === targetCurrency ? value : convertValue(value, convert);

const sum = (...args) =>
  args.reduce((res, val) => {
    res += numberOrEmptyString(val);
    return numberOrEmptyString(res);
  }, 0);

class Deposit extends React.Component {
  state = {
    value: '',
    currency: '',
  };

  handleChange = (value, currency) => this.setState({ value, currency });

  handleDeposit = e => {
    e.preventDefault();

    const { targetCurrency, convert, onDeposit } = this.props;
    const { value, currency } = this.state;
    onDeposit(getCurrencyValue(value, currency, targetCurrency, convert));
    this.setState({
      value: '',
    });
  };

  render() {
    const { value, currency } = this.state;
    const bgn = getCurrencyValue(
      value,
      currency,
      Account.currencies.bgn,
      convertToBgn,
    );

    const eur = getCurrencyValue(
      value,
      currency,
      Account.currencies.eur,
      convertToEur,
    );

    return (
      <>
        <DepositMoney
          value={bgn}
          currency={Account.currencies.bgn}
          onDeposit={this.handleChange}
        />
        <DepositMoney
          value={eur}
          currency={Account.currencies.eur}
          onDeposit={this.handleChange}
        />
        <button onClick={this.handleDeposit}>Deposit</button>
      </>
    );
  }
}

export class Account extends React.Component {
  static currencies = {
    bgn: 'BGN',
    eur: 'EUR',
  };

  state = {
    amount: 0,
  };

  handleDeposit = deposit => {
    this.setState(({ amount }) => ({
      amount: sum(amount, deposit),
    }));
  };

  render() {
    const { amount } = this.state;

    return (
      <div className="form">
        <Box legend="Deposit">
          <Deposit
            targetCurrency={Account.currencies.bgn}
            onDeposit={this.handleDeposit}
            convert={convertToBgn}
          />
        </Box>
        <Box legend="Wallet">
          <CurrentAmount bgn={amount} />
        </Box>
        <Box legend="Info">
          <BuyFifa bgn={amount} />
        </Box>
      </div>
    );
  }
}
