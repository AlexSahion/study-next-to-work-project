'use client'
import css from './autopark-section.module.scss'
import { useState } from 'react'
import { BaseContainer } from '@/shared/ui'
import { AssortmentItems } from './ui'
import { Titles } from '@/shared/ui'
import { AutoparkFilter } from './ui'
import { SelectedFiltersProps } from '@/shared/config/interfaces'

export const AutoparkSection = () => {

	const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersProps>({
		capacity: null,
		cost: null,
		sortBy: null,
	})

	return (
		<BaseContainer>
			<Titles afterSpan='для доставки сотрудников' beforeSpan='' span='Автопарк ' subtitle='Автопарк' />
			<AutoparkFilter selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
			<AssortmentItems selectedFilters={selectedFilters} />
		</BaseContainer>
	)
}