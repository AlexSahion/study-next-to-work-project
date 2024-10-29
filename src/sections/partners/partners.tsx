'use client'

import css from './partners.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { BaseContainer } from "@/shared/ui"
import { Titles } from "@/shared/ui"
import { partnersItem } from './model'

export const Partners = () => {
	return (
		<section className={css.partners}>
			<BaseContainer className={css.container}>
				<div className={css.header}>
					<Titles afterSpan='тысячи сотрудников по всей России' beforeSpan='' span='Ежедневно перевозим' subtitle='' />
					<div className={css.text}>30 000 человек перевозим ежедневно на работу и обратно более чем в 50 городах России</div>
				</div>
				<div className={css.img}>
					<img src="/img/partners/map.png" alt="img" />
				</div>
				<div className={css.swiper}>
					<Swiper
						modules={[Pagination]}
						breakpoints={{
							660: {
								spaceBetween: 40,
							},

							570: {
								spaceBetween: 15,
								slidesPerGroup: 4,
								slidesPerView: 4,
							}
						}}
						pagination={{ clickable: true }}
						className={css.swiperBody}
						spaceBetween={15}
						slidesPerGroup={2}
						slidesPerView={2}
						onSlideChange={() => console.log('slide change')}
						onSwiper={(swiper) => console.log(swiper)}>
						{partnersItem.map(item => (
							<SwiperSlide className={css.slide} key={item.img}>
								<div className={css.logo}>
									<img src={item.img} alt="img" />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</BaseContainer>
		</section>
	)
}