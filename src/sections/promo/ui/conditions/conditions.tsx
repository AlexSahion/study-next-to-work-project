import css from './conditions.module.scss'
import { Bun } from '../bun'

export const Conditions = () => {
	return (
		<div className={css.conditions}>
			<div className={css.cars}>
				<img src="/img/promo/cars.png" alt="img" />
			</div>
			<div className={css.buns}>
				<Bun text={'Собственный автопарк и штат водителей'} iconWay={'/img/promo/icons/icon-car.png'} className={css.bun} />
				<Bun text={'Собственный автопарк и штат водителей'} iconWay={'/img/promo/icons/icon-car.png'} className={css.bun} />
			</div>
		</div>
	)
}