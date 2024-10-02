import css from './logo.module.scss'
import Link from 'next/link'

export const Logo = () => {
	return (
		<div className={css.company}>
			<Link className={css.logo} href="/">
				<div className={css.img}>
					<img src="/img/header/logo.svg" alt="Логотип" />
				</div>
				<div className={css.logoTitles}>
					<div className={css.title}>На Работу 24</div>
					<div className={css.subtitle}>доставка сотрудников</div>
				</div>
			</Link>
			<div className={css.text}>
				Ваш комфортный транспорт на работу и обратно
			</div>
		</div>
	)
}