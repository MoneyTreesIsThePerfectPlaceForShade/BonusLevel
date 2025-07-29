import styles from './Practice.module.css';

export const Practice = ({message, tag = `b`}: {message: string, tag?: string}) => {
	const wisdom = 'is wisdom';
	const WrapperTag = tag;
	const wrapText = (text: string) => <WrapperTag>{text}</WrapperTag>;

	const wrappedText = wrapText(`${message}`);

	return (
		<div className={styles.message} data-testid="message">
			{wrappedText} <span>{wisdom}</span>
		</div>
	);
};
