import css from './promo.module.scss';
import { Information } from './ui/information';
import { Details } from './ui/details';
import { Conditions } from './ui/conditions';
import { BaseContainer } from '@/shared/ui';

export const Promo = () => {
	return (
		<section className={css.promo}>
			<BaseContainer className={css.container}>
				<Information />
				<Details />
				<Conditions />
			</BaseContainer>
		</section>
	);
}
