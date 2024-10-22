import css from './reliabiliti.module.scss'
import { CircleCheck } from 'lucide-react'
import { BaseContainer } from '@/shared/ui'
import { Titles } from '@/shared/ui'

export const Reliability = () => {
	return (
		<section className={css.reliability}>
			<BaseContainer className={css.container}>
				<Titles beforeSpan='' span='Комфорт и надежность' afterSpan=' в каждой поездке' subtitle='' />
				<div className={css.content}>
					<div className={css.item}>
						<div className={css.title}><CircleCheck size={25} /><span>Удобство</span></div>
						<div className={css.text}>Независимо от размера вашего предприятия или числа перевозимых сотрудников, мы разработаем индивидуальные решения, полностью соответствующие вашим потребностям. Наша команда профессионалов тщательно планирует маршруты, учитывая пиковые часы движения и предоставляя оптимальные варианты для минимизации времени в пути и пробок.</div>
					</div>
					<div className={css.item}>
						<div className={css.title}><CircleCheck size={25} /><span>Безопасность</span></div>
						<div className={css.text}>Независимо от размера вашего предприятия или числа перевозимых сотрудников, мы разработаем индивидуальные решения, полностью соответствующие вашим потребностям. Наша команда профессионалов тщательно планирует маршруты, учитывая пиковые часы движения и предоставляя оптимальные варианты для минимизации времени в пути и пробок.</div>
					</div>
					<div className={css.item}>
						<div className={css.title}><CircleCheck size={25} /><span>Безопасность</span></div>
						<div className={css.text}>Независимо от размера вашего предприятия или числа перевозимых сотрудников, мы разработаем индивидуальные решения, полностью соответствующие вашим потребностям. Наша команда профессионалов тщательно планирует маршруты, учитывая пиковые часы движения и предоставляя оптимальные варианты для минимизации времени в пути и пробок.</div>
					</div>
				</div>
			</BaseContainer>
		</section>
	)
}