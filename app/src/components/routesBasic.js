import { createBrowserRouter } from 'react-router-dom';

import TopPage from './TopPage';
import ArticlePage from './ArticlePage';
import AboutPage from './AboutPage';

const routesBasic = createBrowserRouter([
  { path: '/', element: <TopPage /> },
  { path: '/article', element: <ArticlePage /> },
  { path: '/about', element: <AboutPage /> },
], { basename: '/myapp' });

export default routesBasic;