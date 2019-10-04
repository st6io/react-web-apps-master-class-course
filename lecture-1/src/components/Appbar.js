import React from 'react';
import {
  NavbarBrand,
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { find, get } from 'lodash';

class Appbar extends React.PureComponent {
  state = { collapsed: true };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const { location: { pathname } = {}, navs } = this.props;

    const name = get(
      find(navs, { path: pathname }),
      'name',
      'React Patterns & Practices',
    );

    return (
      <Navbar color="light" light className="fixed-top">
        <NavbarBrand href="/" className="mr-auto">
          {name}
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
            {this.props.navs.map(({ path, name }) => (
              <NavItem key={path}>
                <Link
                  onClick={() => {
                    this.setState({ name, collapsed: true });
                  }}
                  to={path}
                >
                  {name}
                </Link>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Appbar);
