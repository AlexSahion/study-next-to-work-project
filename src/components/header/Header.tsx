'use client';

import Link from 'next/link';
import { useState } from "react";
import HeaderMenu from "./HeaderMenu"
import Logo from './Logo';

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
				<Logo className={'header'} />
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