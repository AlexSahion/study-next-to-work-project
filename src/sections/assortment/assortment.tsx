'use client'

import css from './assortment.module.scss'
import { useState } from 'react'
import { routerMap } from '@/shared/config'
import { BaseContainer, Titles } from "@/shared/ui"
import { AllButton } from '@/shared/ui'
import { AssortmentItems } from './ui/assortment-items'
import { Filters } from './ui/filters'

export const Assortment = () => {
	const [activeFiltre, setActiveFiltre] = useState('all')

	const toogleActiveFiltre = (filtre: string) => {
		setActiveFiltre(filtre)
	}

	return (
		<section className={css.assortment}>
			<BaseContainer className={css.container}>
				<Titles afterSpan='для доставки сотрудников' beforeSpan='' span='Выберите транспорт ' subtitle='Автопарк' />
				<Filters toogleFiltre={toogleActiveFiltre} />
				<AssortmentItems activeFilter={activeFiltre} />
				<div className={css.allButton}>
					<AllButton routerMap={routerMap.autopark} text='Показать весь автопарк' />
				</div>
			</BaseContainer>
		</section>
	)
}