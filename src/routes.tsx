import type { RouteObject } from 'react-router';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <LandingPage />,
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
];
