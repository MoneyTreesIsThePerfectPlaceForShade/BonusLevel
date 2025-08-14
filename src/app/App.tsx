import {useDummy} from './hook';
import {Practice} from 'components/Practice/Practice';
import {ChangeEvent, useCallback} from 'react';

export const App = () => {
	const {placeholder} = useDummy();

	const logValue = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
		setTimeout(() => {
			console.log(e.target.value);
		}, 3000);
	}, []);

	return (
		<>
			<Practice onChange={logValue} placeholder={placeholder} type="text" />
		</>
	);
};
