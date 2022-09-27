import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Room from '../pages/Room';
import Test from '../pages/Test';

export const routes = [
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'room',
        element: <Room />,
      },
    ],
  },
  {
    path: '/test',
    element: <Test />,
  },
];

function getRouteList(routes) {
  return routes.map(({ children, ...props }) =>
    children?.length ? (
      <Route {...props} key={props.path}>
        {getRouteList(children)}
      </Route>
    ) : (
      <Route {...props} key={props.path} />
    )
  );
}

function Router({ routes }) {
  return (
    <BrowserRouter>
      <App>
        <Routes>{getRouteList(routes)}</Routes>
      </App>
    </BrowserRouter>
  );
}

export default Router;
