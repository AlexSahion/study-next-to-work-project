import css from './comfort.module.scss';
import { BaseContainer } from '@/shared/ui';
import { Item } from './ui';
import { Titles } from '@/shared/ui';

export const Comfort = () => {
	return (
		<section className={css.comfort}>
			<BaseContainer className={css.container}>
				<Titles beforeSpan='' span='Делаем комфортной перевозку ' afterSpan='ваших сотрудников' subtitle='Преимущества' />
				<Item />
			</BaseContainer>
		</section>
	);
}
