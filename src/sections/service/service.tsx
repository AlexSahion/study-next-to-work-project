import css from './service.module.scss'
import { Content } from './ui'
import { Titles } from '@/shared/ui'
import { AllButton } from '@/shared/ui'
import { routerMap } from '@/shared/config'
import { BaseContainer } from "@/shared/ui"

export const Service = () => {
	return (
		<section className={css.service}>
			<BaseContainer className={css.container}>
				<Titles beforeSpan='' span='Организуем перевозку' afterSpan=' ваших сотрудников на любой объект' subtitle='Услуги' />
				<div className={css.body}>
					<Content />
					<AllButton text="Показать все услуги" routerMap={routerMap.services} />
				</div>
			</BaseContainer>
		</section>
	)
}