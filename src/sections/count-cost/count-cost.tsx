import css from './count-cost.module.scss'
import { GrayRed } from "@/shared/ui"

const info = {
	name: 'Получите расчет доставки сотрудников',
	title: 'Отправьте маршруты на просчёт стоимости',
	text: 'Сделаем просчет ваших маршрутов и предложим лучший вариант под ваш бюджет',
	nameButton: 'Рассчитать стоимость',
	img: '/img/way.png'
}


export const CountCost = () => {
	return (
		<section className={css.questions}>
			<GrayRed {...info} />
		</section>
	)
}