'use client'

import { popupContext } from "@/shared/config";
import { useState } from "react";

interface PopupContextProps {
	children: React.ReactNode
}

export const PopupProvider = ({ children }: PopupContextProps) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false)

	return (
		<popupContext.Provider value={{ isPopupOpen, setIsPopupOpen }}>
			{children}
		</popupContext.Provider>
	)
}