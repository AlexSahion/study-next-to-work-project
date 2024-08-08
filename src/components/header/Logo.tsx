import Link from 'next/link';

export default function Logo({ className = '' }: { className: string }) {
	return (
		<Link className={`${className}__logo`} href='/'>
			<div className={`${className}__logo-img`}>
				<img src="/img/header/logo.svg" alt="img" />
			</div>
			<div className={`${className}__logo-titles`}>
				<div className={`${className}__logo-title`}>На Работу 24</div>
				<div className={`${className}__logo-subtitle`}>доставка сотрудников</div>
			</div>
		</Link>
	)
}