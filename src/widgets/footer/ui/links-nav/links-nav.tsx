import css from './links-nav.module.scss'
import Link from 'next/link'
import { navLinks } from '@/shared/ui'
import { links } from './model'

export const LinksNav = () => {
	return (
		<div className={css.links}>
			<div className={css.pages}>
				{navLinks.map(({ name, href }) => (
					<Link key={name} className={css.link} href={href}>
						{name}
					</Link>
				))}
			</div>
			<div className={css.information}>
				{links.map(({ name, href }) => (
					<Link key={name} className={css.link} href={href}>
						{name}
					</Link>
				))}
			</div>
		</div>
	)
}