import { render, screen } from '@testing-library/react';
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

    test('learn react', async () => {
        render(<App />);
        const dataElem = await screen.findByText(/data/i);
        expect(dataElem).toBeInTheDocument();
        expect(dataElem).toHaveStyle({ color: 'red' });
    });
});
