import css from './assortment-items.module.scss'
import { useEffect, useState } from 'react'
import { useMyPopup } from '@/shared/hooks'
import { itemsAssortment } from '../model'
import { ActiveFilterProps } from '../../assortment'
import cn from 'classnames'

interface AssortmentItemsProps {
	activeFilter: ActiveFilterProps
}

export const AssortmentItems: React.FC<AssortmentItemsProps> = ({ activeFilter }) => {
	const [assortments, setAssortments] = useState(itemsAssortment)
	const { isPopupOpen, setIsPopupOpen } = useMyPopup()

	useEffect(() => {
		const filteredItems = itemsAssortment.filter(item => item.capacity <= activeFilter.description)
		setAssortments(filteredItems)
		console.log('Отфильтрованные данные:', filteredItems)
	}, [activeFilter])

	return (
		<div className={css.items}>
			{assortments.map((item, index) => (
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