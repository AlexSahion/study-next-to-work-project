'use client'

import css from './filter.module.scss'
import { SetStateAction, useEffect, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { ChevronDown } from 'lucide-react'
import cn from 'classnames'
import { mapCapacity, FiltersKey } from '@/shared/config/interfaces'
import { useFilters } from '../libs/use-filters'
import { ComponentSelectedFiltersProps } from '@/shared/config/interfaces'
import { assortments } from '../model'

interface Props extends ComponentSelectedFiltersProps {
	type: FiltersKey,
	isOpenFilter: Record<FiltersKey, boolean>
	setIsOpenFilter: React.Dispatch<React.SetStateAction<Record<FiltersKey, boolean>>>
	handleToogleFilter: (filter: FiltersKey) => void
}

export const Filter = (props: Props) => {
	const { selectedFilters, setSelectedFilters, type, handleToogleFilter, isOpenFilter, setIsOpenFilter } = props
	const { handleClearFilters, toggleSelectedFilters } = useFilters(props)
	const ref = useRef(null)

	const handleClickOutside = () => {
		setIsOpenFilter({
			capacity: false,
			cost: false,
			sortBy: false
		})
	}

	useOnClickOutside(ref, handleClickOutside)

	return (
		<div className={css.filter}>
			<div className={css.filter}>
				<div className={css.name}>
					<div ref={ref} onClick={() => handleToogleFilter(type)} className={cn(css.button, isOpenFilter[type] && css.activeButton)}>
						<span>{assortments[type].title}</span>
						<ChevronDown />
					</div>
					<ul className={cn(css.list, isOpenFilter[type] && css.active)}>
						{assortments[type].params.map((item, index) => (
							<li key={index} onClick={() => toggleSelectedFilters({ params: type, text: item.text })} className={cn(selectedFilters[type] === item.text && css.activeCapacity)}><span></span>{item.text}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}