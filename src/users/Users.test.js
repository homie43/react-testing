import Users from './Users';
import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router';
import UserDeatilsPage from './UserDeatilsPage';
import AppRouter from '../routes/AppRouter';
import { renderWithRouter } from '../tests/helper/renderWithRouter';

// мокаем axios
jest.mock('axios');

describe('users', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    id: 1,
                    name: 'Leanne Graham',
                },
                {
                    id: 2,
                    name: 'Ervin Howell',
                },
                {
                    id: 3,
                    name: 'Clementine Bauch',
                },
            ],
        };
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    // test('renders learn react link', async () => {
    //     axios.get.mockReturnValue(response);

    //     render(<Users />);

    //     const users = await screen.findAllByTestId('user-item');
    //     expect(users.length).toBe(3);
    //     expect(axios.get).toBeCalledTimes(1);
    // });

    test('test redirect to details page', async () => {
        axios.get.mockReturnValue(response);
        render(renderWithRouter(<Users />));
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        fireEvent.click(users[0]);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    });
});
