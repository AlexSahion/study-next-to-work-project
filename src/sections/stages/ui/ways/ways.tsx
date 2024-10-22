import css from './ways.module.scss'
import { stagesWay } from '../model'
import cn from 'classnames'
import { Check } from 'lucide-react'

export const Ways = () => {
	return (
		<div className={css.items}>
			{stagesWay.map((item) => (
				<div key={item.wayClassName} className={css.item}>
					<div className={cn(css.steps, css[item.wayClassName])}>
						<div className={css.step}>{item.wayNumber ? item.wayNumber : <Check />}</div>
					</div>
					<div className={css.text}>{item.wayText}</div>
				</div>
			))}
		</div>
	)
}