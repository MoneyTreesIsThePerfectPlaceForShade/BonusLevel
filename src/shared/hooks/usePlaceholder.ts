import {useEffect, useState} from 'react';

export const usePlaceholder = () => {
	const [placeholder, setPlaceholder] = useState('');

	const setCustomPlaceholder = (place: string) => {
		if (place === 'Take Off') {
			throw new Error(`${place} недоступен в качестве заглушки`);
		}

		setPlaceholder(place);
	};

	const validateCustomPlaceholder = async (place: string) => {
		if (place === 'Take Off') {
			throw new Error(`${place} недоступен в качестве заглушки`);
		}

		return Promise.resolve({placeholder: place, valid: true});
	};

	useEffect(() => {
		setPlaceholder('Bounce Back');
	}, []);

	return {placeholder, setCustomPlaceholder, validateCustomPlaceholder};
};
