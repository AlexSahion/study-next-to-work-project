import Link from 'next/link';

interface LogoProps {
	className?: string;
}

export const Logo = ({ className = '' }: LogoProps) => {
	return (
		<Link className={`${className}__logo`} href="/">
			<div className={`${className}__logo-img`}>
				<img src="/img/header/logo.svg" alt="Логотип" />
			</div>
			<div className={`${className}__logo-titles`}>
				<div className={`${className}__logo-title`}>На Работу 24</div>
				<div className={`${className}__logo-subtitle`}>доставка сотрудников</div>
			</div>
		</Link>
	);
}
