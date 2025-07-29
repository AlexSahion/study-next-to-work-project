import { useContext } from "react";
import { Popup } from "../config";

export const useMyPopup = () => {
	const context = useContext(Popup)
	if (!context) {
		throw new Error('context must be defined')
	}
	return context
}