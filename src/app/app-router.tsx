import {createBrowserRouter} from 'react-router-dom';
import {PrivateRoute} from './private-route';
import {Layout} from './layout';
import {Path} from '../shared/config';
import {Main, Login, Favorites, Offer, NotFound} from '../pages';

export const routes = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        element: <Main/>,
        path: Path.Main,
      },
      {
        element: <Login/>,
        path: Path.Login
      },
      {
        element:
          <PrivateRoute redirectTo={Path.Login}>
            <Favorites/>
          </PrivateRoute>,
        path: Path.Favorites
      },
      {
        element: <Offer/>,
        path: `${Path.Offer}/:id`
      },
      {
        element: <NotFound/>,
        path: '*'
      },
    ]
  },
]);
