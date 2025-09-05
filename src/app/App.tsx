import {Practice} from 'components/Practice/Practice';
import React, {ChangeEvent, useCallback, useEffect} from 'react';
import {usePlaceholder} from 'shared/hooks/usePlaceholder';

export const App = () => {
	const {placeholder, setCustomPlaceholder} = usePlaceholder();

	useEffect(() => {
		setCustomPlaceholder('Back Up');
	}, []);

	const logValue = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
		setTimeout(() => {
			console.log(e.target.value);
		}, 3000);
	}, []);

	return (
		<div data-testid="app">
			<h1>Practice</h1>
			<Practice onChange={logValue} placeholder={placeholder} type="text" />
		</div >
	);
};
