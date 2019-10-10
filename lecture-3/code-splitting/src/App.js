import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import News from './routes/news'
// import About from './routes/about'

const News = lazy(() => import('./routes/news'));
const About = lazy(() => import('./routes/about'));

const Home = () => <div>Home</div>;

export const CodeSplitting = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <ul>
        <li>
          <Link to="/about">About Page</Link>
        </li>
        <li>
          <Link to="/news">News Page</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
      </Switch>
    </Suspense>
  </Router>
);
