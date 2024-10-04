import css from './expirience.module.scss';
import { CircleCheck } from 'lucide-react';
import { BaseContainer } from '@/shared/ui';
import { Titles } from '@/shared/ui';

export const Expirience = () => {
	return (
		<section className={css.expirience}>
			<BaseContainer className={css.container}>
				<Titles beforeSpan='Один перевозчик' span=' в любом городе ' afterSpan='России' subtitle='Почему мы?' />
				<div className={css.item}>
					<CircleCheck size={25} />
					На Работу 24 является лидером в сфере организации
					и предоставления услуг по перевозке сотрудников
				</div>
				<div className={css.content}>
					<div className={css.achievements}>
						<div className={css.achievement}>
							<div className={css.num}>14+</div>
							<div className={css.text}>
								Лет перевозим сотрудников
							</div>
						</div>
						<div className={css.achievement}>
							<div className={css.num}>700+</div>
							<div className={css.text}>
								Довольных клиентов по всей России
							</div>
						</div>
					</div>
					<div className={css.map}>
						<img src="/img/expirience/map.png" alt="img" />
					</div>
				</div>
			</BaseContainer>
		</section >
	);
}
