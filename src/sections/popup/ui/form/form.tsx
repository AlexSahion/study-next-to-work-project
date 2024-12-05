import css from './form.module.scss'
import { Check } from 'lucide-react'

interface FormProps {
	handleOnChange: () => void,
	isChecked: boolean
}

export const Form: React.FC<FormProps> = ({ handleOnChange, isChecked }) => {
	return (
		<div className={css.form}>
			<form className={css.formBody} action="#">
				<div className={css.title}>Заказать звонок</div>
				<div className={css.item}>
					<label htmlFor="formName" className={css.label}>Ваше имя*</label>
					<input placeholder='Как вас зовут?' className={css.input} id='formName' name='name' type="text" />
				</div>
				<div className={css.item}>
					<label htmlFor="formPhone" className={css.label}>Ваш телефон*</label>
					<input placeholder='+7 (999) 999-99-99' className={css.input} id='formPhone' name='phone' type="tel" />
				</div>
				<div className={css.item}>
					<label htmlFor="formMessage" className={css.label}>Сообщение*</label>
					<textarea placeholder='Напишите свой вопрос' className={css.input} id='formMessage' name='message' />
				</div>
				<div className={css.aggriment}>
					<label htmlFor="formAggriment" className={css.label}>даю согласие на обработку персональных данных</label>
					<input onChange={handleOnChange} className={css.aggrimentInput} id='formAggriment' name='aggriment' type="checkbox" />
					{isChecked && <span className={css.icon}><Check /></span>}
				</div>
				<button className={css.button} type="submit"><span>Отправить заявку</span></button>
			</form>
		</div>
	)
}