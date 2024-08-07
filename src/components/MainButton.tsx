interface MainButtonProps {
	text?: string;
	className?: string;
	icon?: string;
}

export default function MainButton({ text = '', className = '', icon = '' }: MainButtonProps) {
	const combinetClassName = `main-button ${className + " " + icon}`.trim()
	return (
		<button className={combinetClassName}>{text ? text : ''}</button>
	)
}