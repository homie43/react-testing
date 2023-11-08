import Users from './Users';
import { render, screen } from '@testing-library/react';
import axios from 'axios';

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

    test('renders learn react link', async () => {
        axios.get.mockReturnValue(response);
        render(<Users />);
        const users = await screen.findAllByTestId('user-elem');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
    });
});
