"use client";

import css from './application.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { BaseContainer } from '@/shared/ui'
import { GrayRed } from '@/shared/ui'
import { itemsApplication } from './module'

export const Application = () => {
	return (
		<section className={css.application}>
			<BaseContainer>
				<Swiper
					modules={[Pagination]}
					pagination={{ clickable: true }}
					className={css.swiper}
					spaceBetween={50}
					slidesPerView={1}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{itemsApplication.map(item => (
						<SwiperSlide key={item.img}><GrayRed {...item} /></SwiperSlide>
					))}
				</Swiper>
			</BaseContainer>
		</section>
	)
}