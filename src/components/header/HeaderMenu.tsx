import Link from 'next/link';
import MainButton from '../MainButton'

export default function HeaderMenu({ active }: { active: boolean }) {
	return (
		<nav className={`menu ${active ? "_active" : ''}`}>
			<ul className="menu__list">
				<li className="menu__item">
					<Link className="menu__link" href='/autopark'>
						Автопарк
					</Link>
				</li>
				<li className="menu__item">
					<Link className="menu__link" href='/services'>
						Услуги
					</Link>
				</li>
				<li className="menu__item">
					<Link className="menu__link" href='/contacts'>
						Контакты
					</Link>
				</li>
			</ul>
			<MainButton text='Заказать звонок' className='menu__button' icon='_icon-phone' />
		</nav>
	)
}