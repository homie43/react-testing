import { renderWithRouter } from '../../tests/helper/renderWithRouter';
import Navbar from './Navbar';
import { render, screen, fireEvent } from '@testing-library/react';

describe('app test', () => {
    test('renders react links', () => {
        render(renderWithRouter(<Navbar />));
        const aboutLink = screen.getByTestId('about-link');
        const mainLink = screen.getByTestId('main-link');
        const userstLink = screen.getByTestId('users-link');

        fireEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();

        fireEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();

        fireEvent.click(userstLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    });
});
