import css from './footer.module.scss';
import Link from 'next/link';
import { Logo } from './ui/logo';
import { LinksNav } from './ui/links-nav';
import { MainButton } from '@/shared/ui';
import { Contacts } from './ui';
import { BaseContainer } from '@/shared/ui';

export const Footer = () => {
	return (
		<footer className={css.footer}>
			<BaseContainer className={css.container}>
				<div className={css.content}>
					<Logo />
					<LinksNav />
					<Contacts />
				</div>
				<div className={css.copyright}>
					© 2024 На Работу 24. Все права защищены
				</div>
			</BaseContainer>
		</footer >
	);
}
