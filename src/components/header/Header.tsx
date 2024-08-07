'use client';

import Link from 'next/link';
import { useState } from "react";
import HeaderMenu from "./HeaderMenu"

export default function Header() {
	const [active, setActive] = useState(false)

	const toggleClass = () => {
		if (!active) {
			document.body.classList.add('_lock')
		} else {
			document.body.classList.remove('_lock')
		}
		setActive(!active)
	}

	return (
		<header className="header">
			<div className="header__container">
				<Link className="header__logo" href='/'>
					<div className="header__logo-img">
						<img src="/img/header/logo.svg" alt="img" />
					</div>
					<div className="header__logo-titles">
						<div className="header__logo-title">На Работу 24</div>
						<div className="header__logo-subtitle">доставка сотрудников</div>
					</div>
				</Link>

				<HeaderMenu active={active} />

				<div className="header__order">
					<a className='_icon-phone' href="#">Заказать звонок</a>
				</div>
				<div onClick={toggleClass} className="header__icon">
					<span></span>
				</div>
			</div>
		</header>
	)
}