'use client';

import Link from 'next/link';
import { useState } from 'react';
import HeaderMenu from './HeaderMenu';
import Logo from '../../shared/ui/logo/Logo';
import styles from './styles/header.module.scss';

export default function Header() {
	const [active, setActive] = useState(false);

	const toggleClass = () => {
		if (!active) {
			document.body.classList.add('_lock');
		} else {
			document.body.classList.remove('_lock');
		}
		setActive(!active);
	};

	return (
		<header className={`${styles.header} ${active ? styles._lock : ''}`}>
			<div className={styles.header__container}>
				<Link className={styles.logo} href="/">
					<div className={styles.logoImg}>
						<img src="/img/header/logo.svg" alt="Логотип" />
					</div>
					<div className={styles.logoTitles}>
						<div className={styles.logoTitle}>На Работу 24</div>
						<div className={styles.logoSubtitle}>доставка сотрудников</div>
					</div>
				</Link>
				<HeaderMenu active={active} />
				<div className={styles.order}>
					<a className='_icon-phone' href="#">Заказать звонок</a>
				</div>
				<div onClick={toggleClass} className={styles.icon}>
					<span></span>
				</div>
			</div>
		</header>
	);
}
