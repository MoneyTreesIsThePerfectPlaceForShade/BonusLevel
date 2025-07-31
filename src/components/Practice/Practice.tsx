import styles from './Practice.module.css';
import {ChangeEvent} from 'react';

export const Practice = (
	{
		onChange,
		placeholder,
		type
	}:
	{
		onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
		placeholder: string,
		type: string
	}
) =>
	<input className={styles.input} data-testid="practice-input" onChange={onChange} placeholder={placeholder} type={type} />
;
