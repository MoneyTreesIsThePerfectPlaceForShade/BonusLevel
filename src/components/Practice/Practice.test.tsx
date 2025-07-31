import {Practice} from './Practice';
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const testId = 'practice-input';

describe('Practice', () => {
	it('имеет css класс "input"', () => {
		const expectedClass = 'input';

		render(<Practice placeholder="some message" type="text" />);

		expect(screen.getByTestId(testId)).toHaveClass(expectedClass);
	});

	it('имеет заглушку', () => {
		const expectedPlaceholder = 'championship';

		render(<Practice placeholder={expectedPlaceholder} type="text" />);

		expect(screen.getByTestId(testId)).toHaveAttribute('placeholder', expectedPlaceholder);
	});

	it('вызывает функцию обратного вызова onChange при изменении значения поля (fireEvent)', () => {
		// Подготовка данных
		const newValue = 'cold summer';
		const logValue = jest.fn();

		// Выполнение действий
		render(<Practice onChange={logValue} placeholder="it is going to be" type="text" />);

		const input = screen.getByTestId(testId);

		fireEvent.change(input, {target: {value: newValue}});

		// Проверка результатов
		expect(logValue).toHaveBeenCalledTimes(1);
	});

	it('вызывает функцию обратного вызова onChange при изменении значения поля (userEvent)', async () => {
		// Подготовка данных
		const newValue = 'cold summer';
		const logValue = jest.fn();
		const user = userEvent.setup();

		// Выполнение действий
		render(<Practice onChange={logValue} placeholder="it is going to be" type="text" />);

		const input = screen.getByTestId(testId);

		await user.type(input, newValue);

		// Проверка результатов
		expect(logValue).toHaveBeenCalledTimes(newValue.length);
	});
});
