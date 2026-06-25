import { render, screen } from '@testing-library/react';
import { createMemoryRouter, MemoryRouter, RouterProvider } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import NotFoundPage from '@/pages/NotFoundPage';
import { routes } from '@/routes';

vi.mock('@/pages/LandingPage', () => ({
	default: () => <main>Marketplace home</main>,
}));

const UNKNOWN_ROUTE = '/creator/this-route-does-not-exist';

describe('NotFoundPage routing integration', () => {
	it('renders NotFoundPage when the app navigates to an unknown route', () => {
		const router = createMemoryRouter(routes, {
			initialEntries: [UNKNOWN_ROUTE],
		});

		render(<RouterProvider router={router} />);

		expect(
			screen.getByRole('heading', {
				name: /not found/i,
			})
		).toBeInTheDocument();
		expect(screen.getByText(/route not found/i)).toBeInTheDocument();
	});

	it('provides link back to marketplace home', () => {
		render(
			<MemoryRouter>
				<NotFoundPage />
			</MemoryRouter>
		);

		expect(
			screen.getByRole('link', { name: /back to marketplace/i })
		).toHaveAttribute('href', '/');
	});
});
