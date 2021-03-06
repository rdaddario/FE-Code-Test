import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import RoutingPaths from 'navigation/routing-paths';
import CocktailDetailContainer from 'views/cocktail/containers/cocktail-detail-container';
import CocktailListContainer from 'views/cocktail/containers/cocktail-list-container';
import compose from 'recompose/compose';

const Home = () =>
  <div>
    <Switch>
      <Route exact path={`${RoutingPaths.cocktail}/:id`} component={CocktailDetailContainer}/>
      <Route path={RoutingPaths.root} component={CocktailListContainer}/>
      <Redirect from="/" to={RoutingPaths.root} exact/>
      <Redirect to={RoutingPaths.notFound}/>
    </Switch>
  </div>;

export default compose(withRouter)(Home);
