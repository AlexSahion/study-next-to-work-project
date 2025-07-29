import { mapCapacity, mapCostType, mapSortByType } from "@/shared/config";

export const grays = ['capacity', 'cost', 'sortBy'] as const
type Grays = typeof grays[number]

export const assortments = {
	capacity: {
		title: 'Вместимость',
		params: [
			{
				text: mapCapacity.sm
			},

			{
				text: mapCapacity.md
			},

			{
				text: mapCapacity.bg
			}
		]
	},

	cost: {
		title: 'Ценна',
		params: [
			{
				text: mapCostType.sm
			},

			{
				text: mapCostType.md
			},

			{
				text: mapCostType.bg
			}
		]
	},

	sortBy: {
		title: 'Вместимость',
		params: [
			{
				text: mapSortByType.sm
			},

			{
				text: mapSortByType.md
			},

			{
				text: mapSortByType.bg
			}
		]
	},
}

console.log(assortments.capacity);
