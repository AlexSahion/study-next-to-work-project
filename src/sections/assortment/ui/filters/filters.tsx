import css from './filters.module.scss'
import { ActiveFilterProps } from '../../assortment'

interface FiltersProps {
	handleActiveFilter: (filter: ActiveFilterProps) => void
}

export const Filters: React.FC<FiltersProps> = ({ handleActiveFilter }) => {
	return (
		<div className={css.filters}>
			<div onClick={() => handleActiveFilter({ type: 'all', description: 100 })} className={css.filter}>
				<div className={css.titles}>
					<div className={css.title}>Весь транспорт</div>
				</div>
			</div>
			<div onClick={() => handleActiveFilter({ type: 'big', description: 60 })} className={css.filter}>
				<div className={css.titles}>
					<div className={css.title}>Автобусы</div>
					<div className={css.subtitle}>вместимость до 60 человек</div>
				</div>
			</div>
			<div onClick={() => handleActiveFilter({ type: 'middle', description: 20 })} className={css.filter}>
				<div className={css.titles}>
					<div className={css.title}>Микроавтобусы</div>
					<div className={css.subtitle}>вместимость до 20 человек</div>
				</div>
			</div>
			<div onClick={() => handleActiveFilter({ type: 'small', description: 9 })} className={css.filter}>
				<div className={css.titles}>
					<div className={css.title}>Минивэны</div>
					<div className={css.subtitle}>местимость до 9 человек</div>
				</div>
			</div>
		</div>
	)
}