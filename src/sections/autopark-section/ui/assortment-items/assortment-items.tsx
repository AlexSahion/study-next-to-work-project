'use client'

import css from './assortment-items.module.scss'
import { useEffect, useState } from 'react'
import { useFilterAssortment, useMyPopup } from '@/shared/hooks'
import { SelectedFiltersProps } from '@/shared/config/interfaces'
import cn from 'classnames'

interface AssortmentItemsProps {
	selectedFilters: SelectedFiltersProps
}

export const AssortmentItems = ({ selectedFilters }: AssortmentItemsProps) => {
	const { isPopupOpen, setIsPopupOpen } = useMyPopup()
	const assortment = useFilterAssortment(selectedFilters)

	return (
		<div className={cn(css.items)}>
			{assortment.map((item, index) => (
				<div key={index} className={css.item}>
					<div className={css.img}><img src={item.img} alt="img" /></div>
					<div className={css.content}>
						<div className={css.name}>{item.name}</div>
						<div className={css.info}>
							<div className={css.capacity}>Вместимость <span>{item.capacity}</span><span> мест</span></div>
							<div className={css.price}>Цена ₽/час <span>от {item.price} ₽</span></div>
						</div>
						<div onClick={() => setIsPopupOpen(!isPopupOpen)} className={css.button}>Заказать</div>
					</div>
				</div>
			))}
		</div>

	)
}