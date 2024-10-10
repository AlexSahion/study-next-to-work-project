import css from './questions.module.scss'
import { GrayRed } from "@/shared/ui"

const info = {
	name: 'Свяжитесь с нами',
	title: 'Остались вопросы',
	text: 'Оставьте заявку на звонок и мы свяжемся  с вами в течение 20 минут, чтобы ответить на все интересующие вас вопросы',
	nameButton: 'Заказать звонокь',
	img: '/img/questions.png'
}

export const Questions = () => {
	return (
		<section className={css.questions}>
			<GrayRed {...info} />
		</section>
	)
}