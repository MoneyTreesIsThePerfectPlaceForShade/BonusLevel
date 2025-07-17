import styles from './App.module.css';
import {useEffect, useState} from 'react';

export const App = () => {
	const [theme, setTheme] = useState<'dark' | 'light'>('light');

	// переключение темы
	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';

		setTheme(newTheme);

		if (newTheme === 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.removeAttribute('data-theme');
		}

		localStorage.setItem('theme', newTheme);
	};

	// инициализация темы при загрузке
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' || 'light';

		setTheme(savedTheme);

		if (savedTheme === 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.removeAttribute('data-theme');
		}
	}, []);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Its Johnny</h1>
			<button className={styles.button} onClick={toggleTheme}>
				{theme === 'light' ? ' Темная тема' : '☀️ Светлая тема'}
			</button>
		</div>
	);
};
