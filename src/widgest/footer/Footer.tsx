import Link from 'next/link';
import Logo from '../../shared/ui/logo/Logo';
import MainButton from '@/shared/ui/main-button/MainButton';
import styles from './styles/footer.module.scss';
import footerLogoStyles from './styles/footer-logo.module.scss';
import footerLinksStyles from './styles/footer-links.module.scss';
import footerContactsStyles from './styles/footer-contacts.module.scss';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.content}>
					<div className={styles.company}>
						<Link className={footerLogoStyles.logo} href="/">
							<div className={footerLogoStyles.logoImg}>
								<img src="/img/header/logo.svg" alt="Логотип" />
							</div>
							<div className={footerLogoStyles.logoTitles}>
								<div className={footerLogoStyles.logoTitle}>На Работу 24</div>
								<div className={footerLogoStyles.logoSubtitle}>доставка сотрудников</div>
							</div>
						</Link>
						<div className={styles.text}>
							Ваш комфортный транспорт на работу и обратно
						</div>
					</div>
					<div className={footerLinksStyles.links}>
						<div className={footerLinksStyles.pages}>
							<Link href="" className={footerLinksStyles.link}>
								Автопарк
							</Link>
							<Link href="" className={footerLinksStyles.link}>
								Услуги
							</Link>
							<Link href="" className={footerLinksStyles.link}>
								Контакты
							</Link>
						</div>
						<div className={footerLinksStyles.information}>
							<Link href="" className={footerLinksStyles.link}>
								Политика конфиденциальности
							</Link>
							<Link href="" className={footerLinksStyles.link}>
								Образец договора фрахтования
							</Link>
							<Link href="" className={footerLinksStyles.link}>
								Лицензия
							</Link>
						</div>
					</div>
					<div className={footerContactsStyles.contacts}>
						<a href="mailto:example@example.com" className={`${footerContactsStyles.email} _icon-mail`}>
							manager@dostavkasotrudnikov.ru
						</a>
						<a href="tel:+7 800 600 00 00" className={`${footerContactsStyles.phone} _icon-phone`}>
							+7 800 600 00 00
						</a>
						<MainButton className={footerContactsStyles.order} icon="_icon-phone" text="Заказать звонок" />
					</div>
				</div>
				<div className={styles.copyright}>
					© 2024 На Работу 24. Все права защищены
				</div>
			</div>
		</footer>
	);
}
