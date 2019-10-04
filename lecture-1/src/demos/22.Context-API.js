import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';

import { currency } from '../utils';

const CurrencyContext = React.createContext({
  currency: currency.bgn,
  amount: 0,
});

class CurrentAmount extends React.Component {
  static contextType = CurrencyContext;
  render() {
    const { amount, currency } = this.context;
    return (
      <div>
        Account: {amount} {currency}
      </div>
    );
  }
}

const AppBar = () => (
  <Navbar color="dark" className="account-bar ">
    <Nav navbar className="w-100">
      <NavItem>
        <CurrentAmount />
      </NavItem>
    </Nav>
  </Navbar>
);

export const AccountWithoutProvider = () => {
  return <AppBar />;
};

export const AccountWithProvider = () => {
  return (
    <CurrencyContext.Provider value={{ currency: currency.eur, amount: 100 }}>
      <AppBar />
    </CurrencyContext.Provider>
  );
};
