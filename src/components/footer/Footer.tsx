import Logo from "../header/Logo"
import Link from "next/link"
import MainButton from "../MainButton"

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__content">
					<div className="footer__company">
						<Logo className={'footer'} />
						<div className="footer__text">Ваш комфортный транспорт на работу и обратно</div>
					</div>
					<div className="footer__links">
						<div className="footer__pages">
							<Link href='' className="footer__link">
								Автопарк
							</Link>
							<Link href='' className="footer__link">
								Услуги
							</Link>
							<Link href='' className="footer__link">
								Контакты
							</Link>
						</div>
						<div className="footer__information">
							<Link href='' className="footer__link">
								Политика конфиденциальности
							</Link>
							<Link href='' className="footer__link">
								Образец договора фрахтования
							</Link>
							<Link href='' className="footer__link">
								Лицензия
							</Link>
						</div>
					</div>
					<div className="footer__contacts">
						<a href="mailto:example@example.com" className="footer__email _icon-mail">manager@dostavkasotrudnikov.ru</a>
						<a href="tel:+7 800 600 00 00" className="footer__phone _icon-phone">+7 800 600 00 00 </a>
						<MainButton className="footer__order" icon="_icon-phone" text="Заказать звонок" />
					</div>
				</div>
				<div className="footer__copyright">
					© 2024 На Работу 24. Все права защищены
				</div>
			</div>
		</footer>
	)
}