import css from './assortment-items.module.scss'
import { itemsAssortment } from '../model'
import cn from 'classnames'

interface activeFilterProps {
	activeFilter: string
}
//TODO : this block
export const AssortmentItems: React.FC<activeFilterProps> = ({ activeFilter }) => {
	console.log(activeFilter);
	const filteredItems = itemsAssortment.filter(item => {
		if (activeFilter === 'all') return true; // Если фильтр 'all', возвращаем все
		if (activeFilter === 'big') return item.capacity <= 60;
		if (activeFilter === 'middle') return item.capacity <= 20;
		if (activeFilter === 'small') return item.capacity <= 9;
		return false; // На всякий случай
	});

	return (
		<div className={cn(css.items)}>
			{filteredItems.map(item => (
				<div key={item.name} className={css.item}>
					<div className={css.img}><img src={item.img} alt="img" /></div>
					<div className={css.content}>
						<div className={css.name}>{item.name}</div>
						<div className={css.info}>
							<div className={css.capacity}>Вместимость <span></span><span>{item.capacity} мест</span></div>
							<div className={css.price}>Цена ₽/час <span>от {item.price} ₽</span></div>
						</div>
						<div className={css.button}>Заказать</div>
					</div>
				</div>
			))}
		</div>

	)
}