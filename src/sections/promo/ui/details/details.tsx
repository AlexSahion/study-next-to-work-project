import css from './details.module.scss'
import { Bun } from '../bun'
export const Details = () => {
	return (
		<div className={css.details}>
			<Bun text={'Собственный автопарк и штат водителей'} iconWay={'/img/promo/icons/icon-car.png'} className={css.bun} />
			<div className={css.img}>
				<img src="/img/promo/phone.png" alt="img" />
			</div>
		</div>
	)
}