'use client'
import { useState } from "react";
import { type PropsWithChildren } from "react";
import { Popup } from "@/shared/config";

export const PopupContext: React.FC<PropsWithChildren> = ({ children }) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false)
	return (
		<Popup.Provider value={{ isPopupOpen, setIsPopupOpen }}>
			{children}
		</Popup.Provider>
	)
}