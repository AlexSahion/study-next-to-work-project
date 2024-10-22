import { Interface } from 'readline'
import cn from "classnames"
import css from './titles.module.scss'
import classNames from 'classnames'

interface Props {
	beforeSpan: string,
	span: string,
	afterSpan: string,
	subtitle: string,
}

export const Titles = ({ beforeSpan, span, afterSpan, subtitle }: Props) => {
	return (
		<div className={css.titles}>
			<div className={css.title}>
				{beforeSpan}<span>{span}</span>{afterSpan}
			</div>
			{subtitle && (
				<div className={css.subtitle}>
					{subtitle}
				</div>
			)}
		</div >
	)
}