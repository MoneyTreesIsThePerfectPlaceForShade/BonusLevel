import styles from './Practice.module.css';
import {ChangeEvent, useState} from 'react';

export const Practice = (
	{
		onChange,
		onError,
		onSuccess,
		placeholder,
		type
	}:
	{
		onChange?: (e: ChangeEvent<HTMLInputElement>) => Promise<void>,
		onError?: () => void,
		onSuccess?: () => void,
		placeholder: string,
		type: string
	}
) => {
	const [currentValue, setCurrentValue] = useState('');

	const customOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		setCurrentValue(e.target.value);

		try {
			await onChange?.(e);
			onSuccess?.();
		} catch {
			onError?.();
		}
	};

	return (
		<input
			className={styles.input}
			data-testid="practice-input"
			onChange={customOnChange}
			placeholder={placeholder}
			type={type}
			value={currentValue}
		/>
	);
}
;
