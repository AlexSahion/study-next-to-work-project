import styles from './expirience.module.scss';

export default function Expirience() {
	return (
		<section className={styles.expirience}>
			<div className={styles.expirience__container}>
				<div className={styles.titles}>
					<div className={styles.title}>
						Один перевозчик <span>в любом городе</span> России
					</div>
					<div className={styles.subtitle}>
						Почему мы?
					</div>
				</div>
				<div className={`${styles.item} _icon-ok`}>
					На Работу 24 является лидером в сфере организации
					и предоставления услуг по перевозке сотрудников
				</div>
				<div className={styles.content}>
					<div className={styles.achievements}>
						<div className={styles.achievement}>
							<div className={styles.num}>14+</div>
							<div className={styles.text}>
								Лет перевозим сотрудников
							</div>
						</div>
						<div className={styles.achievement}>
							<div className={styles.num}>700+</div>
							<div className={styles.text}>
								Довольных клиентов по всей России
							</div>
						</div>
					</div>
					<div className={styles.map}>
						<img src="/img/expirience/map.png" alt="img" />
					</div>
				</div>
			</div>
		</section>
	);
}
