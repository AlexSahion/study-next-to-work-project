import css from './stages.module.scss'
import { PiggyBank, ScrollText } from 'lucide-react'
import { BaseContainer } from '@/shared/ui'
import { Titles } from '@/shared/ui'
import { Ways } from './ui/ways'

export const Stages = () => {
	return (
		<section>
			<BaseContainer className={css.container}>
				<Titles afterSpan='' beforeSpan='Запустите перевозку сотрудников с нами ' span='качественно, легко и быстро' subtitle='Этапы работы' />
				<Ways />
				<div className={css.buns}>
					<div className={css.bun}>
						<div className={css.icon}><PiggyBank size={35} /></div>
						<div className={css.text}>Прозрачная финансовая система работа с НДС</div>
					</div>
					<div className={css.bun}>
						<div className={css.icon}><ScrollText size={35} /></div>
						<div className={css.text}>Зафиксируем цены на год по договору</div>
					</div>
				</div>
			</BaseContainer>
		</section>
	)
}