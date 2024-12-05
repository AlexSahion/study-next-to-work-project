import { Questions } from "@/sections"
import { Info } from "@/sections"
import { PopupProvider } from "../_providers"

export default function Contacts() {
	return (
		<PopupProvider>
			<Info />
			<Questions />
		</PopupProvider>
	)
}