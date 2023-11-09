import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('testing routing', () => {
    test('Router test', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');

        fireEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();

        fireEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('testing error page', () => {
        render(
            <MemoryRouter initialEntries={['/aswasw']}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByTestId('error-page')).toBeInTheDocument();
    });
});
