import css from './menu.module.scss';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import cn from 'classnames'
import { MainButton } from '@/shared/ui';
import { navLinks } from '@/shared/ui';


interface Props {
	isActive: boolean;
}

export const Menu = ({ isActive }: Props) => {
	return (
		<nav className={cn(css.menu, isActive && css._active)}>
			<ul className={css.list}>
				{navLinks.map(({ name, href }) => (
					<li key={name} className={css.item}>
						<Link className={css.link} href={href}>
							{name}
						</Link>
					</li>
				))}
			</ul>
			<MainButton text='Заказать звонок' className={css.button} icon={<Phone />} />
		</nav>
	);
}
