import { Interface } from 'readline'
import css from './titles.module.scss'

interface Props {
	beforeSpan: string,
	span: string,
	afterSpan: string,
	subtitle: string
}

export const Titles = ({ beforeSpan, span, afterSpan, subtitle }: Props) => {
	return (
		<div className={css.titles}>
			<div className={css.title}>
				{beforeSpan}<span>{span}</span>{afterSpan}
			</div>
			<div className={css.subtitle}>
				{subtitle}
			</div>
		</div>
	)
}