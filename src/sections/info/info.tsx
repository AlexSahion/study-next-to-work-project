import css from './info.module.scss'
import { Clock } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Phone } from 'lucide-react'
import { BaseContainer } from '@/shared/ui'

export const Info = () => {
	return (
		<section className={css.info}>
			<BaseContainer className={css.container}>
				<div className={css.content}>
					<div className={css.title}>Свяжитесь с нами</div>
					<div className={css.items}>
						<div className={css.item}>
							<div className={css.icon}><Phone /></div>
							<div className={css.name}>Телефон</div>
							<div className={css.text}>8 (922) 124-19-58</div>
						</div>
						<div className={css.item}>
							<div className={css.icon}><Mail /></div>
							<div className={css.name}>Почта</div>
							<div className={css.text}>manager@dostavkasotrudnikov.ru</div>
						</div>
						<div className={css.item}>
							<div className={css.icon}><Clock /></div>
							<div className={css.name}>Время работы</div>
							<div className={css.text}>Круглосуточно, без выходных</div>
						</div>
					</div>
				</div>
				<div className={css.map}>
				</div>
			</BaseContainer>
		</section>
	)
}