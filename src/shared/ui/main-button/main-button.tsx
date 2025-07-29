'use client'
import css from './main-button.module.scss';
import { useMyPopup } from '@/shared/hooks';

interface MainButtonProps {
	text?: string;
	className?: string;
	icon?: React.ReactNode;
}

export const MainButton = ({ text = '', className = '', icon }: MainButtonProps) => {
	const combinedClassName = `${css['main-button']} ${className ? className : ''}`.trim();
	const { isPopupOpen, setIsPopupOpen } = useMyPopup()

	return (
		<button onClick={() => setIsPopupOpen(!isPopupOpen)} className={combinedClassName}>
			{icon && <span className={css.icon}>{icon}</span>}
			{text}
		</button>
	);
}
