import { Dispatch, SetStateAction } from "react"

export const mapCapacity = {
	sm: '1-9 человек',
	md: '10-20 человек',
	bg: '21-60 человек'
} as const

export const mapCostType = {
	sm: '1600-2300 руб./час',
	md: '2350-2950 руб./час',
	bg: '3000-3450 руб./час'
} as const

export const mapSortByType = {
	sm: 'По вместимости',
	md: 'По убыванию цены',
	bg: 'По возрастанию цены'
} as const

type MapCapacity = typeof mapCapacity
type MapCost = typeof mapCostType
type MapSortBy = typeof mapSortByType

export type CapacityType = MapCapacity[keyof MapCapacity]
export type CostType = MapCost[keyof MapCost]
export type SortByType = MapSortBy[keyof MapSortBy]

export interface SelectedFiltersProps {
	capacity: CapacityType | null,
	cost: CostType | null,
	sortBy: SortByType | null
}

export type FiltersKey = keyof SelectedFiltersProps

export interface ComponentSelectedFiltersProps {
	selectedFilters: SelectedFiltersProps,
	setSelectedFilters: Dispatch<SetStateAction<SelectedFiltersProps>>
}