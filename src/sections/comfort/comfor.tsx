import css from './comfort.module.scss';
import { BaseContainer } from '@/shared/ui';
import { Item } from './ui';

export const Comfort = () => {
	return (
		<section className={css.comfort}>
			<BaseContainer className={css.container}>
				<div className={`${css.titles}`}>
					<div className={`${css.title}`}>
						<span>Делаем комфортной перевозку</span> ваших сотрудников
					</div>
					<div className={`${css.subtitle}`}>
						Преимущества
					</div>
				</div>
				<Item />
			</BaseContainer>
		</section>
	);
}
