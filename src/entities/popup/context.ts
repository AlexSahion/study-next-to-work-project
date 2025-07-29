'use client'
import { createContext } from "react";

interface PopupProps {
	isPopupOpen: boolean,
	setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Popup = createContext<PopupProps | undefined>(undefined)