import {reflectionEternal} from './test';

it('reflection eternal is everywhere', () => {
	const words = 'Music is gorgeous';
	const wordsOfWisdom = reflectionEternal(words);

	const expectedWordOfWisdom = 'Music is gorgeous is reflection eternal';

	expect(wordsOfWisdom).toEqual(expectedWordOfWisdom);
});
