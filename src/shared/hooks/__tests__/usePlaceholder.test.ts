import {usePlaceholder} from '../usePlaceholder';
import {act, renderHook} from '@testing-library/react';

describe('usePlaceholder', () => {
	it('возвращает объект с полем `placeholder` и строковым значением этого поля', () => {
		const {result} = renderHook(usePlaceholder);

		expect(result.current).toHaveProperty('placeholder');
		expect(typeof result.current.placeholder).toBe('string');
	});

	it('вызывает setPlaceholder при использовании функции setCustomPlaceholder', () => {
		const {result} = renderHook(usePlaceholder);

		expect(result.current.placeholder).toBe('Bounce Back');

		// При изменении локального хранилища компонента нужно работать в act.
		act(() => {
			result.current.setCustomPlaceholder('Back Up');
		});

		expect(result.current.placeholder).toBe('Back Up');
	});

	it('возвращает объект валидации, если заглушка прошла проверку', async () => {
		const {result} = renderHook(usePlaceholder);

		const placeholder = 'Not Take Off';

		await expect(result.current.validateCustomPlaceholder(placeholder)).resolves.toStrictEqual({placeholder, valid: true});
	});

	it('выкидывает ошибку, если заглушка не прошла валидацию', async () => {
		const {result} = renderHook(usePlaceholder);

		const placeholder = 'Take Off';

		await expect(result.current.validateCustomPlaceholder(placeholder)).rejects.toThrow(`${placeholder} недоступен в качестве заглушки`);
	});
});
