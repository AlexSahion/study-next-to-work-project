import { Service } from "@/sections"
import { Stages } from "@/sections"
import { Reliability } from "@/sections"
import { CountCost } from "@/sections"
import { Popup } from "@/sections"

export default function Services() {
	return (
		<>
			<Popup />
			<Service />
			<Stages />
			<Reliability />
			<CountCost />
		</>
	)
} 