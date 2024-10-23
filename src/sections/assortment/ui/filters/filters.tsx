import css from './filters.module.scss'

interface FilterProps {
	toogleFiltre: (filtre: string) => void
}

export const Filters: React.FC<FilterProps> = ({ toogleFiltre }) => {
	return (
		<div className={css.filters}>
			<div className={css.filter}>
				<div className={css.titles}>
					<div onClick={() => toogleFiltre('all')} className={css.title}>Весь транспорт</div>
				</div>
			</div>
			<div className={css.filter}>
				<div className={css.titles}>
					<div className={css.title}>Автобусы</div>
					<div onClick={() => toogleFiltre('big')} className={css.subtitle}>вместимость до 60 человек</div>
				</div>
			</div>
			<div className={css.filter}>
				<div className={css.titles}>
					<div className={css.title}>Микроавтобусы</div>
					<div onClick={() => toogleFiltre('middle')} className={css.subtitle}>вместимость до 20 человек</div>
				</div>
			</div>
			<div className={css.filter}>
				<div className={css.titles}>
					<div className={css.title}>Минивэны</div>
					<div onClick={() => toogleFiltre('small')} className={css.subtitle}>местимость до 9 человек</div>
				</div>
			</div>
		</div>
	)
}