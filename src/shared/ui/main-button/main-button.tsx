import css from './main-button.module.scss';

interface MainButtonProps {
	onClick?: () => void;
	text?: string;
	className?: string;
	icon?: React.ReactNode;
}

export const MainButton = ({ onClick, text = '', className = '', icon }: MainButtonProps) => {
	const combinedClassName = `${css['main-button']} ${className ? className : ''}`.trim();

	return (
		<button onClick={onClick} className={combinedClassName}>
			{icon && <span className={css.icon}>{icon}</span>}
			{text}
		</button>
	);
}
