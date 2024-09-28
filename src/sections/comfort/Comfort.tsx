import styles from './styles/comfort.module.scss';
import itemComfortStyles from './styles/item-comfort.module.scss';

export default function Comfort() {
	return (
		<section className={styles.comfort}>
			<div className={styles.comfort__container}>
				<div className={`${styles.titles}`}>
					<div className={`${styles.title}`}>
						<span>Делаем комфортной перевозку</span> ваших сотрудников
					</div>
					<div className={`${styles.subtitle}`}>
						Преимущества
					</div>
				</div>
				<div className={styles.content}>
					<div className={`${itemComfortStyles.itemComfort} ${itemComfortStyles.itemComfortReverse}`}>
						<div className={itemComfortStyles.content}>
							<div className={itemComfortStyles.title}>
								Транспорт всегда в исправном состоянии
							</div>
							<ul className={itemComfortStyles.list}>
								<li className="_icon-ok">
									Механик проверяет каждое транспортное средство перед поездкой на наличие неисправностей
								</li>
								<li className="_icon-ok">
									Каждая машина продублирована и в случае форс-мажора может быть заменена на аналогичное транспортное средство
								</li>
								<li className="_icon-ok">
									Все автобусы оснащены GPS, чтобы вы и ваши сотрудники могли в любое время отслеживать местоположение транспорта в мобильном приложении
								</li>
							</ul>
						</div>
						<div className={itemComfortStyles.img}>
							<img src="/img/comfort/car.png" alt="Транспорт" />
						</div>
					</div>
					<div className={`${itemComfortStyles.itemComfort} ${itemComfortStyles.itemComfortReverse}`}>
						<div className={itemComfortStyles.content}>
							<div className={itemComfortStyles.title}>
								Транспорт всегда в исправном состоянии
							</div>
							<ul className={itemComfortStyles.list}>
								<li className="_icon-ok">
									Механик проверяет каждое транспортное средство перед поездкой на наличие неисправностей
								</li>
								<li className="_icon-ok">
									Каждая машина продублирована и в случае форс-мажора может быть заменена на аналогичное транспортное средство
								</li>
								<li className="_icon-ok">
									Все автобусы оснащены GPS, чтобы вы и ваши сотрудники могли в любое время отслеживать местоположение транспорта в мобильном приложении
								</li>
							</ul>
						</div>
						<div className={itemComfortStyles.img}>
							<img src="/img/comfort/help.png" alt="Помощь" />
						</div>
					</div>
					<div className={`${itemComfortStyles.itemComfort} ${itemComfortStyles.itemComfortImageEnd}`}>
						<div className={itemComfortStyles.content}>
							<div className={itemComfortStyles.title}>
								Транспорт всегда в исправном состоянии
							</div>
							<ul className={itemComfortStyles.list}>
								<li className="_icon-ok">
									Механик проверяет каждое транспортное средство перед поездкой на наличие неисправностей
								</li>
								<li className="_icon-ok">
									Каждая машина продублирована и в случае форс-мажора может быть заменена на аналогичное транспортное средство
								</li>
								<li className="_icon-ok">
									Все автобусы оснащены GPS, чтобы вы и ваши сотрудники могли в любое время отслеживать местоположение транспорта в мобильном приложении
								</li>
							</ul>
						</div>
						<div className={itemComfortStyles.img}>
							<img src="/img/comfort/clock.png" alt="Часы" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
