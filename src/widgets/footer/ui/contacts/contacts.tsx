import css from "./contacts.module.scss";
import { Phone, Mail } from "lucide-react";
import { MainButton } from '@/shared/ui';

export const Contacts = () => {
	return (
		<div className={css.contacts}>
			<a href="mailto:example@example.com" className={css.email}>
				<Mail size={20} />
				manager@dostavkasotrudnikov.ru
			</a>
			<a href="tel:+7 800 600 00 00" className={css.phone}>
				<Phone size={20} />
				+7 800 600 00 00
			</a>
			<MainButton className={css.order} icon={<Phone size={20} />} text="Заказать звонок" />
		</div>
	)
}