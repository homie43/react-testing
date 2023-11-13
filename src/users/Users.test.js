import Users from './Users';
import { act, fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import { renderWithRouter } from '../tests/helper/renderWithRouter';
import userEvent from '@testing-library/user-event';

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
        render(renderWithRouter(null, '/users'));
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        act(() => {
            userEvent.click(users[0]);
        });
        expect(screen.getByTestId('user-page')).toBeInTheDocument();
    });
});
