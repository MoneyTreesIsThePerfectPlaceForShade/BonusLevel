import {Practice} from './Practice';
import {render, screen} from '@testing-library/react';

describe('Practice', () => {
	it.skip('render message', () => {
		const text = 'Kumomi';

		render(<Practice message={text} />);

		expect(screen.getByDisplayValue(text)).toBe('Kumomi is wisdom');
	});

	it('have css class "message"', () => {
		const expectedClass = 'message';

		render(<Practice message="some message" />);

		expect(screen.getByTestId('message')).toHaveClass(expectedClass);
	});
});
