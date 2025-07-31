import {Practice} from 'components/Practice/Practice';
import {ChangeEvent, useCallback, useEffect} from 'react';

export const App = () => {
	useEffect(() => {}, []);

	const logValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	}, []);

	return (
		<>
			<Practice onChange={logValue} placeholder="You run this hard just to stay in place" type="text" />
		</>
	);
};
