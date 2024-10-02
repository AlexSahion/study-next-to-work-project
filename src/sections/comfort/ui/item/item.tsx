import css from './item.module.scss'
import { CircleCheck } from 'lucide-react'

export const Item = () => {
	return (
		<div className={css.items}>
			<div className={css.item}>
				<div className={css.content}>
					<div className={css.title}>
						Транспорт всегда в исправном состоянии
					</div>
					<ul className={css.list}>
						<li >
							<CircleCheck size={25} />
							Механик проверяет каждое транспортное средство перед поездкой на наличие неисправностей
						</li>
						<li >
							<CircleCheck size={25} />
							Каждая машина продублирована и в случае форс-мажора может быть заменена на аналогичное транспортное средство
						</li>
						<li >
							<CircleCheck size={25} />
							Все автобусы оснащены GPS, чтобы вы и ваши сотрудники могли в любое время отслеживать местоположение транспорта в мобильном приложении
						</li>
					</ul>
				</div>
				<div className={css.img}>
					<img src="/img/comfort/car.png" alt="Транспорт" />
				</div>
			</div>
			<div className={`${css.item} ${css.itemReverse}`}>
				<div className={css.content}>
					<div className={css.title}>
						Транспорт всегда в исправном состоянии
					</div>
					<ul className={css.list}>
						<li >
							<CircleCheck size={25} />
							Механик проверяет каждое транспортное средство перед поездкой на наличие неисправностей
						</li>
						<li >
							<CircleCheck size={25} />
							Каждая машина продублирована и в случае форс-мажора может быть заменена на аналогичное транспортное средство
						</li>
						<li >
							<CircleCheck size={25} />
							Все автобусы оснащены GPS, чтобы вы и ваши сотрудники могли в любое время отслеживать местоположение транспорта в мобильном приложении
						</li>
					</ul>
				</div>
				<div className={css.img}>
					<img src="/img/comfort/help.png" alt="Помощь" />
				</div>
			</div>
			<div className={`${css.item} ${css.itemImageEnd}`}>
				<div className={css.content}>
					<div className={css.title}>
						Транспорт всегда в исправном состоянии
					</div>
					<ul className={css.list}>
						<li >
							<CircleCheck size={25} />
							Механик проверяет каждое транспортное средство перед поездкой на наличие неисправностей
						</li>
						<li >
							<CircleCheck size={25} />
							Каждая машина продублирована и в случае форс-мажора может быть заменена на аналогичное транспортное средство
						</li>
						<li >
							<CircleCheck size={25} />
							Все автобусы оснащены GPS, чтобы вы и ваши сотрудники могли в любое время отслеживать местоположение транспорта в мобильном приложении
						</li>
					</ul>
				</div>
				<div className={css.img}>
					<img src="/img/comfort/clock.png" alt="Часы" />
				</div>
			</div>
		</div>
	)
}