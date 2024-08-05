import Link from 'next/link';

export default function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__logo"></div>
				<nav className="header__menu">
					<ul className="header__list">
						<li className="header__item">
							<Link className="header__link" href='/autopark'>
								Автопарк
							</Link>
						</li>
						<li className="header__item">
							<Link className="header__link" href='/services'>
								Услуги
							</Link>
						</li>
						<li className="header__item">
							<Link className="header__link" href='/contacts'>
								Контакты
							</Link>
						</li>
					</ul>
				</nav>
				<div className="header__order">
					<a href="#">Заказать звонок</a>
				</div>
			</div>
		</header>
	)
}