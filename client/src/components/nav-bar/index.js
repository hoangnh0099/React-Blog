import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from '../../pages/home';
import './style.css';
import PostDetail from '../../pages/post-detail';
import SearchResult from '../../pages/search-result';
import NotFound from '../../pages/not-found';

const NavBar = () => {
  return (
    <div className="NavBar">
      <BrowserRouter>
        <div className="nav-bar">
          <Link to="/" className="brand-logo">
            Logo Blog
          </Link>

          <form method="GET" action="/search">
            <input
              type="text"
              name="keyword"
              className="search-bar"
              placeholder="Search"
            />
          </form>
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetail} />
          <Route path="/search" exact component={SearchResult} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default NavBar;
