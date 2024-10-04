import css from './all-button.module.scss'

interface allButtnoProps {
	text: string,
	routerMap: string,
}

export const AllButton = ({ text, routerMap }: allButtnoProps) => {
	return (
		// TODO: hover on button
		<div className={css.button}><a href={routerMap}>{text}</a></div>
	)
}