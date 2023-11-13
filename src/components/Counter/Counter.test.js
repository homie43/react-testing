import { act, render, screen } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('Counter test', () => {
    test('Test router', async () => {
        render(
            <Provider store={store}>
                <Counter />
            </Provider>
        );

        const incrementBtn = screen.getByTestId('increment');
        expect(screen.getByTestId('value-title')).toHaveTextContent('0');
        act(() => {
            userEvent.click(incrementBtn);
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    });
});
