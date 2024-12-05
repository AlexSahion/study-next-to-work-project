import { Service } from "@/sections"
import { Stages } from "@/sections"
import { Reliability } from "@/sections"
import { CountCost } from "@/sections"
import { PopupProvider } from "../_providers"

export default function Services() {
	return (
		<PopupProvider>
			<Service />
			<Stages />
			<Reliability />
			<CountCost />
		</PopupProvider>
	)
} 