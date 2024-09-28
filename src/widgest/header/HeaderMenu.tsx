import Link from 'next/link';
import MainButton from '@/shared/ui/main-button/MainButton';
import styles from './styles/header-menu.module.scss';

interface HeaderMenuProps {
	active: boolean;
}

export default function HeaderMenu({ active }: HeaderMenuProps) {
	return (
		<nav className={`${styles.menu} ${active ? styles._active : ''}`}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link className={styles.link} href='/autopark'>
						Автопарк
					</Link>
				</li>
				<li className={styles.item}>
					<Link className={styles.link} href='/services'>
						Услуги
					</Link>
				</li>
				<li className={styles.item}>
					<Link className={styles.link} href='/contacts'>
						Контакты
					</Link>
				</li>
			</ul>
			<MainButton text='Заказать звонок' className={styles.button} icon='_icon-phone' />
		</nav>
	);
}
