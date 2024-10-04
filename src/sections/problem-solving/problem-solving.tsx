import css from './problem-solving.module.scss'
import cn from 'classnames';
import { item } from './ui';
import { BaseContainer } from '@/shared/ui';
import { Titles } from '@/shared/ui';

export const ProblemSolving = () => {
	return (
		<section className={css.problem}>
			<BaseContainer className={css.container}>
				<Titles beforeSpan="Доверьте нам решение" span=" ваших задач " afterSpan="России" subtitle="Задачи" />
				<div className={css.body}>
					{item.map(({ className, name, text, img }) => (
						<div key={name} className={cn(css.item, className)}>
							<div className={css.content}>
								<div className={css.name}>{name}</div>
								<div className={css.text}>{text}</div>
							</div>
							<div className={css.img}>
								<img src={img} alt="img" />
							</div>
						</div>
					))}
				</div>
			</BaseContainer >
		</section>
	)
}