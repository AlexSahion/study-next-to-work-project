import MainButton from "@/components/MainButton"

export default function Promo() {
	return (
		<section className="promo">
			<div className="promo__container">
				<div className="promo__information information-promo">
					<h1 className="information-promo__title"><span>Доставка сотрудников</span> на работу и обратно в Нижнем Новгороде</h1>
					<div className="information-promo__text">Местоположение вашего транспорта на любом маршруте в режиме реального времени через  мобильное приложение, позволяющим контролировать каждую поездку вашей организации</div>
					<MainButton icon="_icon-calc" text="Рассчитать стоимость" className="information-promo__btn" />
				</div>
				<div className="promo__details details-promo">
					<div className="details-promo__bun bun">
						<div className="bun__icon">
							<img src="/img/promo/icons/icon-phone.png" alt="img" />
						</div>
						<div className="bun__text">Все детали каждой вашей поездки в приложении</div>
					</div>
					<div className="details-promo__img">
						<img src="/img/promo/phone.png" alt="img" />
					</div>
				</div>
				<div className="promo__conditions conditions-promo">
					<div className="conditions-promo__cars">
						<img src="/img/promo/cars.png" alt="img" />
					</div>
					<div className="conditions-promo__buns">
						<div className="conditions-promo__bun bun">
							<div className="bun__icon">
								<img src="/img/promo/icons/icon-clock.png" alt="img" />
							</div>
							<div className="bun__text">Подача транспорта точно к месту и в срок</div>
						</div>
						<div className="conditions-promo__bun bun">
							<div className="bun__icon">
								<img src="/img/promo/icons/icon-car.png" alt="img" />
							</div>
							<div className="bun__text">Собственный автопарк и штат водителей</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}