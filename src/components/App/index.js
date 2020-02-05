// == Import : npm
import React from 'react';
import {
  Route, Switch,
  Redirect, withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import Nav from 'src/components/Nav';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';
import PostDetail from 'src/components/PostDetail';

import './app.scss';

// data
import { filterPostsByCategory, getPostBySlug } from 'src/data/posts';
import { getTitleByPathname } from 'src/data/utils';
import categoriesData from 'src/data/categories';

// == Composant
class App extends React.Component {
  componentDidMount() {
    const { history, location } = this.props;
    history.listen(({ pathname }) => {
      // j'execute ma méthode à chaque changement d'url
      this.changeTitle(pathname);
    });
    // et j'execute ma méthode une première fois
    this.changeTitle(location.pathname);
  }

  changeTitle = (pathname) => {
    // je peux changer le titre en fonction du pathname
    document.title = getTitleByPathname(pathname);
  }

  render() {
    return (
      <div id="blog">
        <Nav categories={categoriesData} />
        {/* le switch permet de s'arrêter à la première route qui match */}
        <Switch>
          {categoriesData.map(({ label, route }) => (
            <Route
              exact
              key={route}
              path={route}
              render={() => (
                <Posts posts={filterPostsByCategory(label)} />
              )}
            />
          ))}

          <Route
            path="/posts/:slug"
            render={(routeInfo) => {
              const { slug } = routeInfo.match.params;
              // je récupère le post qui m'intéresse en fonction du slug
              const post = getPostBySlug(slug);
              return (
                // je laisse couler post, je déverse les propriétés de l'objet post sous forme de props
                <PostDetail {...post} />
              );
            }}
          />
          {/* Redirect permet de faire une redirection
          l'ordre des Route/Redirect dans le switch
          toujours du plus spécifique au plus général */}
          <Redirect from="/jquery" to="/autre" />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.shape({
    listen: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

// == Export
// je peux "envelopper" un composant avec la fonction withRouter de react router
// cette fonction va transmettre en props les objets history, match, location
// export default withRouter(App);
const AppWithRouter = withRouter(App);
export default AppWithRouter;
