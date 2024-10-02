import styles from './main-button.module.scss';

interface MainButtonProps {
	text?: string;
	className?: string;
	icon?: React.ReactNode;
}

export const MainButton = ({ text = '', className = '', icon }: MainButtonProps) => {
	// TODO: Используем классы из модульного CSS
	const combinedClassName = `${styles['main-button']} ${className ? className : ''}`.trim();

	return (
		<button className={combinedClassName}>
			{icon && <span className={`${styles.icon}`}>{icon}</span>}
			{text}
		</button>
	);
}
