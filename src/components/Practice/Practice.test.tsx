import {Practice} from './Practice';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ChangeEvent} from 'react';

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

	it('вызывает функцию обратного вызова onSuccess, после успешного выполнения асинхронной функции onChange', async () => {
		// Подготвка данных
		const newValue = 'cold summer';
		const onSuccess = jest.fn();

		render(<Practice onChange={jest.fn()} onSuccess={onSuccess} placeholder="cold summer" type="text" />);

		// Выполнение действий

		const input = screen.getByTestId(testId);

		fireEvent.change(input, {target: {value: newValue}});

		// Проверка результатов
		await waitFor(() => {
			expect(onSuccess).toHaveBeenCalledTimes(1);
		});
	});

	it('вызывает функцию обратного вызова onError, после провального выполнения асинхронной функции onChange', async () => {
		// Подготвка данных
		const newValue = 'cold summer';
		const onError = jest.fn();

		render(<Practice onChange={(e: ChangeEvent<HTMLInputElement>) => Promise.reject(e)} onError={onError} placeholder="cold summer" type="text" />);

		// Выполнение действий

		const input = screen.getByTestId(testId);

		fireEvent.change(input, {target: {value: newValue}});

		// Проверка результатов
		await waitFor(() => {
			expect(onError).toHaveBeenCalledTimes(1);
		});
	});
});
