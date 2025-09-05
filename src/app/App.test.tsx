import {App} from './App';
import {fireEvent, render, screen} from '@testing-library/react';

describe('App', () => {
	it('отображается с заголовком и строкой ввода', () => {
		const {container} = render(<App />);

		const input = screen.getByTestId('practice-input');
		const title = container.querySelector('h1');

		expect(screen.getByTestId('app')).toBeInTheDocument();
		expect(input).toBeInTheDocument();
		expect(title).toBeInTheDocument();
	});

	it('позволяет ввести в строку ввода текст', () => {
		render(<App />);

		const input = screen.getByTestId('practice-input');

		expect(input.getAttribute('value')).toBe('');

		fireEvent.change(input, {target: {value: 'Cold Summer'}});

		expect(input.getAttribute('value')).toBe('Cold Summer');
	});
});
