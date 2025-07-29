import { useState, useEffect, Dispatch, SetStateAction } from "react"
import type { FiltersKey } from "@/shared/config"
import type { SelectedFiltersProps, ComponentSelectedFiltersProps } from "@/shared/config/interfaces"

interface ToggleSelectedFiltersProps<T extends FiltersKey> {
	params: T,
	text: SelectedFiltersProps[T]
}

interface UseFiltersProps extends ComponentSelectedFiltersProps {

}

export const useFilters = ({ selectedFilters, setSelectedFilters }: UseFiltersProps) => {
	const [isOpenFilter, setIsOpenFilter] = useState({
		capacity: false,
		cost: false,
		sortBy: false,
	})

	const hasFilter = Object.values(selectedFilters).some(value => value !== null)

	const handleToogleFilter = (filter: FiltersKey) => {
		setIsOpenFilter((prev) => ({
			capacity: filter === 'capacity' ? !prev.capacity : false,
			cost: filter === 'cost' ? !prev.cost : false,
			sortBy: filter === 'sortBy' ? !prev.sortBy : false,
		}))
	}

	const handleClearFilters = () => {
		setSelectedFilters({
			capacity: null,
			cost: null,
			sortBy: null,
		})
	}

	const toggleSelectedFilters = <T extends keyof SelectedFiltersProps>({ params, text }: ToggleSelectedFiltersProps<T>) => {
		setSelectedFilters(prev => ({
			...prev,
			[params]: text
		}))
	}

	return {
		toggleSelectedFilters,
		handleClearFilters,
		handleToogleFilter,
		hasFilter,
		isOpenFilter,
		setIsOpenFilter
	}
}