import React from 'react';
import { setDisplayName, compose } from 'recompose';
import {
  Navbar,
  NavItem,
  Nav,
  Toast,
  ToastBody,
  ToastHeader,
} from 'reactstrap';

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
 * withChangeHandler
 */
const withChangeHandler = ({
  handlerName = 'onChange',
  enhanceHandler = () => undefined,
}) => WrappedComponent => {
  class WithChangeHandler extends React.Component {
    handleChange = ({ target: { value } }) => {
      console.log(value);
      this.props[handlerName](value, enhanceHandler(this.props));
    };

    render() {
      return <WrappedComponent {...this.props} onChange={this.handleChange} />;
    }
  }
  return WithChangeHandler;
};

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
  render() {
    return (
      <select value={this.props.currency} onChange={this.props.onChange}>
        {Object.values(currencies).map(currency => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    );
  }
}

const EnhancedSelectCurrency = compose(
  setDisplayName('EnhancedSelectCurrency'),
  withChangeHandler({ handlerName: 'onCurrencyChange' }),
)(SelectCurrency);

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

const BuyFifaWithCurrency = compose(
  setDisplayName('BuyFifaInfo'),
  withCurrencyConversion(currencies.bgn, 'money'),
)(BuyFifa);

/**
 * DepositMoney Component
 */
const DepositMoney = ({ value, currency, onChange }) => (
  <div className="form">
    <label>Money in {currency}</label>
    <input value={value} onChange={onChange} />
  </div>
);

const enhance = (displayName, ...args) =>
  compose(
    setDisplayName(displayName),
    withCurrencyConversion(...args),
    withChangeHandler({
      handlerName: 'onDeposit',
      enhanceHandler: ({ currency }) => currency,
    }),
  );

const DepositMoneyWithCurrency = enhance('EnhancedDepositMoney')(DepositMoney);

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
  <div className="wallet d-flex justify-content-between">
    <CurrentAmount money={amount} currency={currency} />
    <EnhancedSelectCurrency
      currency={currency}
      onCurrencyChange={onCurrencyChange}
    />
  </div>
);

const AppBar = ({ children }) => (
  <Navbar color="dark" className="account-bar ">
    <Nav navbar className="w-100">
      <NavItem>{children}</NavItem>
    </Nav>
  </Navbar>
);

const DepositPage = ({ currency, onDeposit }) => (
  <Box legend="Deposit">
    <Deposit currentCurrency={currency} onDeposit={onDeposit} />
  </Box>
);

const InfoPopUp = ({ toast }) => (
  <Toast className="info-toast position-absolute">
    <ToastHeader icon="warning">Info!</ToastHeader>
    <ToastBody>{toast}</ToastBody>
  </Toast>
);

class Page extends React.Component {
  render() {
    const { pageContent, toast } = this.props;
    return (
      <div className="d-flex">
        {pageContent}
        {toast && <InfoPopUp toast={toast} />}
      </div>
    );
  }
}

/**
 * Account Component
 */
export class Account extends React.Component {
  state = {
    amount: 0,
    currency: currencies.bgn,
    toast: false,
  };

  hideToast = () => {
    setTimeout(() => {
      this.setState({ toast: false });
    }, 2000);
  };

  handleDeposit = deposit => {
    this.setState(
      ({ amount }) => ({
        amount: sum(amount, deposit),
        toast: true,
      }),
      this.hideToast,
    );
  };

  handleCurrencyChange = currency => {
    this.setState(({ currency: currentCurrency, amount }) => ({
      currency,
      amount: convertCurrency(amount, currentCurrency, currency),
    }));
  };

  render() {
    const { amount, currency, toast } = this.state;

    return (
      <div className="form">
        <AppBar>
          <Wallet
            currency={currency}
            amount={amount}
            onCurrencyChange={this.handleCurrencyChange}
          />
        </AppBar>
        <Page
          currency={currency}
          amount={amount}
          onDeposit={this.handleDeposit}
          pageContent={
            <DepositPage currency={currency} onDeposit={this.handleDeposit} />
          }
          toast={
            toast && (
              <BuyFifaWithCurrency money={amount} currentCurrency={currency} />
            )
          }
        />
      </div>
    );
  }
}
