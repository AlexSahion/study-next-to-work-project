import css from './bun.module.scss'

interface Props {
	iconWay: string,
	text: string,
	className: string,
}

export const Bun = ({ iconWay, text, className }: Props) => {
	return (
		<div className={`${css.bun} ${className}`}>
			<div className={css.icon}>
				<img src={iconWay} alt="img" />
			</div>
			<div className={css.text}>{text}</div>
		</div>
	)
}

{/* <div className={`${css.bun} ${styles.bun}`}>
				<div className={styles.bun__icon}>
					<img src="/img/promo/icons/icon-car.png" alt="img" />
				</div>
				<div className={styles.bun__text}>Собственный автопарк и штат водителей</div>
			</div> */}