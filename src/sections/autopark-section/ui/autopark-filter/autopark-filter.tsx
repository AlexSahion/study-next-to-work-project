'use client'
import css from './autopark-filter.module.scss'
import { useState, useEffect, useLayoutEffect, SetStateAction } from 'react'
import { ChevronDown, X } from 'lucide-react'
import cn from 'classnames'
import { ComponentSelectedFiltersProps } from '@/shared/config/interfaces'
import { SelectedFiltersProps, FiltersKey } from '@/shared/config/interfaces'
import { useFilters } from './libs/use-filters'
import { Filter } from './ui'
import { grays } from './model'
import { useRef } from 'react'

interface Props extends ComponentSelectedFiltersProps {

}

export const AutoparkFilter = (props: Props) => {
	const { selectedFilters, setSelectedFilters } = props;
	const { handleClearFilters, handleToogleFilter, toggleSelectedFilters, hasFilter, isOpenFilter, setIsOpenFilter } = useFilters(props)

	return (
		<div className={css.body}>
			<div className={css.content}>
				<div className={css.filters}>
					<Filter setIsOpenFilter={setIsOpenFilter} isOpenFilter={isOpenFilter} handleToogleFilter={handleToogleFilter} type='capacity' selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
					<Filter setIsOpenFilter={setIsOpenFilter} isOpenFilter={isOpenFilter} handleToogleFilter={handleToogleFilter} type='cost' selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
					{hasFilter &&
						<button onClick={() => handleClearFilters()} className={cn(css.gray, css.reset)}>
							<span>Сбросить все фильтры</span>
							<X size={14} />
						</button>}
				</div>
				<div className={css.sort}>
					<div className={css.gray}>Сортировать:</div>
					<Filter setIsOpenFilter={setIsOpenFilter} isOpenFilter={isOpenFilter} handleToogleFilter={handleToogleFilter} type='sortBy' selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
				</div>
			</div>
			<div className={css.actives}>
				<div className={css.name}>Фильтры:</div>
				<div className={css.grays}>
					{grays.map((item, index) => (
						<div key={index} className={css.gray}>{selectedFilters[item]}</div>
					))}
				</div>
			</div>
		</div>
	)
}