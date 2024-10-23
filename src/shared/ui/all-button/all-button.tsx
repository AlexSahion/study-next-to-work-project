import css from './all-button.module.scss'
import Link from 'next/link'

interface allButtnoProps {
	text: string,
	routerMap: string,
}

export const AllButton = ({ text, routerMap }: allButtnoProps) => {
	return (
		<div className={css.button}><Link href={routerMap}>{text}</Link></div>
	)
}