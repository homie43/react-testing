import { renderWithRouter } from '../../tests/helper/renderWithRouter';
import Navbar from './Navbar';
import { render, screen, fireEvent } from '@testing-library/react';

describe('app test', () => {
    test('click on main page', () => {
        render(renderWithRouter(<Navbar />));
        const mainLink = screen.getByTestId('main-link');
        fireEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('click on about page', () => {
        render(renderWithRouter(<Navbar />));
        const aboutLink = screen.getByTestId('about-link');

        fireEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });

    test('click on users page', () => {
        render(renderWithRouter(<Navbar />));
        const userstLink = screen.getByTestId('users-link');

        fireEvent.click(userstLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    });
});
