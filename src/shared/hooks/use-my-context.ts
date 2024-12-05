'use client'

import { useContext } from "react";
import { popupContext } from "../config";

export const useMyContext = () => {
	const data = useContext(popupContext)

	if (!data) {
		throw new Error('useMyContext must be defined')
	}
	return data
}