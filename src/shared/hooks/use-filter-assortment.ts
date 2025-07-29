import { itemsAssortment } from "../config/items-assortment"
import { SelectedFiltersProps } from "../config/interfaces"

export const useFilterAssortment = (selectedFilters: SelectedFiltersProps) => {
	const assortments = [...itemsAssortment]

	const parseRange = (range: string | null) => {
		if (!range) return null
		return range.split(' ')[0].split('-').map(Number)
	}

	const capacityRange = parseRange(selectedFilters.capacity)
	const costRange = parseRange(selectedFilters.cost)

	const assortmentFiltered = assortments.filter(item => {
		const capacityFilter = capacityRange ? item.capacity >= capacityRange[0] && item.capacity <= capacityRange[1] : true
		const costFilter = costRange ? item.price >= costRange[0] && item.price <= costRange[1] : true

		return capacityFilter && costFilter
	})

	return assortmentFiltered
}