import css from './content.module.scss'
import Link from 'next/link'
import { routerMap } from '@/shared/config'
import { ArrowUpRight } from 'lucide-react'
import { item } from './module/item'

export const Content = () => {
	return (
		<div className={css.content}>
			{item.map(({ title, img }) => (
				<div key={img} className={css.item}>
					<div className={css.img}>
						<img src={img} alt="img" />
					</div>
					<div className={css.bottom}>
						<div className={css.title}>{title}</div>
						<div className={css.button}><Link href='#' className={css.link}><ArrowUpRight size={19} /></Link></div>
					</div>
				</div>
			))}
		</div>
	)
}