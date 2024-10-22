import css from './main-button.module.scss';

interface MainButtonProps {
	text?: string;
	className?: string;
	icon?: React.ReactNode;
}

export const MainButton = ({ text = '', className = '', icon }: MainButtonProps) => {
	const combinedClassName = `${css['main-button']} ${className ? className : ''}`.trim();

	return (
		<button className={combinedClassName}>
			{icon && <span className={css.icon}>{icon}</span>}
			{text}
		</button>
	);
}
