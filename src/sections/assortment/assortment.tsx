'use client'

import css from './assortment.module.scss'
import { useEffect, useState, useCallback } from 'react'
import { routerMap } from '@/shared/config'
import { BaseContainer, Titles } from "@/shared/ui"
import { AllButton } from '@/shared/ui'
import { AssortmentItems } from './ui/assortment-items'
import { Filters } from './ui/filters'

export interface ActiveFilterProps {
	type: string,
	description: number
}

export const Assortment = () => {
	const [activeFilter, setActiveFilter] = useState<ActiveFilterProps>({
		type: 'all',
		description: 60,
	})

	const handleActiveFilter = useCallback((filter: ActiveFilterProps) => {
		console.log('Нажали фильтр:', filter)
		setActiveFilter(filter)
	}, [])

	useEffect(() => {
		console.log(activeFilter)
	}, [activeFilter])

	return (
		<section className={css.assortment}>
			<BaseContainer className={css.container}>
				<Titles afterSpan='для доставки сотрудников' beforeSpan='' span='Выберите транспорт ' subtitle='Автопарк' />
				<Filters handleActiveFilter={handleActiveFilter} />
				<AssortmentItems activeFilter={activeFilter} />
				<div className={css.allButton}>
					<AllButton routerMap={routerMap.autopark} text='Показать весь автопарк' />
				</div>
			</BaseContainer>
		</section>
	)
}