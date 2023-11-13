import {
    render,
    screen,
    fireEvent,
    userEvent,
    act,
} from '@testing-library/react';
import App from './App';

describe('APP TEST', () => {
    // test('renders learn react link', () => {
    //     render(<App />); // тестируемый компонент
    //     // через объект screen и функцию getByText мы получаем како-то элемент
    //     const helloWorldElem = screen.getByText(/hello world/i);
    //     const btn = screen.getByRole('button');
    //     const input = screen.getByPlaceholderText(/input value/);
    //     // toBeInTheDocument проверяет наличине ранее полученного объекта в документе
    //     expect(helloWorldElem).toBeInTheDocument();
    //     expect(btn).toBeInTheDocument();
    //     expect(input).toBeInTheDocument();
    // });
    // test('learn react', async () => {
    //     render(<App />);
    //     const dataElem = await screen.findByText(/data/i);
    //     expect(dataElem).toBeInTheDocument();
    //     expect(dataElem).toHaveStyle({ color: 'red' });
    // });
    // test('learn react', () => {
    //     render(<App />);
    //     const btn = screen.getByRole('button');
    //     // используем queryByText тк изначально элемента на стр нет
    //     // проверяем что его реально нет
    //     expect(screen.queryByText(/ВКЛ/i)).toBeNull();
    //     // далее жмем на кнопку
    //     fireEvent.click(btn);
    //     // проверяем что элемент появился
    //     expect(screen.queryByText(/ВКЛ/i)).toBeInTheDocument();
    // });
    // test('test input', () => {
    //     render(<App />);
    //     const input = screen.getByPlaceholderText(/input value/i);
    //     // eslint-disable-next-line jest/valid-expect
    //     const inputValue = screen.queryByTestId('value-elem');
    //     expect(inputValue).toContainHTML('');
    //     act(() => {
    //         userEvent.input(input, {
    //             target: { value: '12345' },
    //         });
    //     });
    //     // eslint-disable-next-line jest/valid-expect
    //     expect(inputValue).toContainHTML('12345');
    // });
});
