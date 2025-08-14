import {useEffect, useState} from 'react';

export const useDummy = () => {
	const [placeholder, setPlaceholder] = useState('');

	useEffect(() => {
		setPlaceholder('Back up');
	}, []);

	return {placeholder};
};
