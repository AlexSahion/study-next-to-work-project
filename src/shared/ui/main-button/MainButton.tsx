import styles from './main-button.module.scss';

interface MainButtonProps {
	text?: string;
	className?: string;
	icon?: string;
}

export default function MainButton({ text = '', className = '', icon = '' }: MainButtonProps) {
	// Используем классы из модульного CSS
	const combinedClassName = `${styles['main-button']} ${className ? className : ''} ${icon ? icon : ''}`.trim();

	return (
		<button className={combinedClassName}>
			{icon && <span className={`${styles.icon} ${icon}`}></span>}
			{text}
		</button>
	);
}
