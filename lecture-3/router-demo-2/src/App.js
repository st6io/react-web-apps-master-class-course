import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

import { isAuthenticated, authenticate, signout } from './auth';

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;
const Login = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const login = () => authenticate(() => setShouldRedirect(true));

  const from = props.location.state.from || { pathname: '/' };

  if (shouldRedirect) return <Redirect to={'/protected'} />;

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
};

const Header = withRouter(({ history }) =>
  isAuthenticated ? (
    <>
      <p>Welcome !</p>

      <button onClick={() => signout(() => history.push('/'))}>Sign out</button>
    </>
  ) : (
    <p>You are not logged in.</p>
  ),
);

export const RouteNavigation = () => (
  <Router>
    <div>
      <Header />
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <Route
        path="/protected"
        render={props =>
          isAuthenticated ? (
            <Protected />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
      />
    </div>
  </Router>
);
