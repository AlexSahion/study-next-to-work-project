import styles from './styles/promo.module.scss';
import infoStyles from './styles/promo-information.module.scss';
import detailsStyles from './styles/promo-details.module.scss';
import conditionsStyles from './styles/promo-conditions.module.scss';
import MainButton from "@/shared/ui/main-button/MainButton";

export default function Promo() {
	return (
		<section className={styles.promo}>
			<div className={styles.promo__container}>
				<div className={infoStyles.informationPromo}>
					<h1 className={infoStyles.title}>
						<span>Доставка сотрудников</span> на работу и обратно в Нижнем Новгороде
					</h1>
					<div className={infoStyles.text}>
						Местоположение вашего транспорта на любом маршруте в режиме реального времени через мобильное приложение, позволяющим контролировать каждую поездку вашей организации
					</div>
					<MainButton icon="_icon-calc" text="Рассчитать стоимость" className={infoStyles.btn} />
				</div>
				<div className={detailsStyles.detailsPromo}>
					<div className={`${detailsStyles.bun} ${styles.bun}`}>
						<div className={styles.bun__icon}>
							<img src="/img/promo/icons/icon-phone.png" alt="img" />
						</div>
						<div className={detailsStyles.text}>Все детали каждой вашей поездки в приложении</div>
					</div>
					<div className={detailsStyles.img}>
						<img src="/img/promo/phone.png" alt="img" />
					</div>
				</div>
				<div className={conditionsStyles.conditionsPromo}>
					<div className={conditionsStyles.cars}>
						<img src="/img/promo/cars.png" alt="img" />
					</div>
					<div className={conditionsStyles.buns}>
						<div className={`${conditionsStyles.bun} ${styles.bun}`}>
							<div className={styles.bun__icon}>
								<img src="/img/promo/icons/icon-clock.png" alt="img" />
							</div>
							<div className={styles.bun__text}>Подача транспорта точно к месту и в срок</div>
						</div>
						<div className={`${conditionsStyles.bun} ${styles.bun}`}>
							<div className={styles.bun__icon}>
								<img src="/img/promo/icons/icon-car.png" alt="img" />
							</div>
							<div className={styles.bun__text}>Собственный автопарк и штат водителей</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
