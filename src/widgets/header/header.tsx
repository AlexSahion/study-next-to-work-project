'use client';

import css from './header.module.scss';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import cn from 'classnames'
import { useMyPopup } from '@/shared/hooks';
import { Menu } from './ui';
import { Logo } from '@/shared/ui';
import { BaseContainer } from '@/shared/ui';

export const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const { isPopupOpen, setIsPopupOpen } = useMyPopup()

	const toggleClass = () => {
		if (!isActive) {
			document.body.classList.add('_lock');
		} else {
			document.body.classList.remove('_lock');
		}
		setIsActive(!isActive);
	};

	return (
		<header className={css.header}>
			<BaseContainer className={css.container}>
				<Link className={css.logo} href="/">
					<div className={css.logoImg}>
						<img src="/img/header/logo.svg" alt="Логотип" />
					</div>
					<div className={css.logoTitles}>
						<div className={css.logoTitle}>На Работу 24</div>
						<div className={css.logoSubtitle}>доставка сотрудников</div>
					</div>
				</Link>
				<Menu isActive={isActive} />
				<div className={css.order}>
					<a onClick={() => setIsPopupOpen(!isPopupOpen)} href="#"><Phone size={20} />Заказать звонок</a>
				</div>
				<div onClick={toggleClass} className={cn(css.icon, '_icon-phone')}>
					<span></span>
				</div>
			</BaseContainer>
		</header>
	);
}
