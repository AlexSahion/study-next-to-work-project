'use client'

import { createContext, Dispatch, SetStateAction } from "react";

interface popupContextProps {
	isPopupOpen: boolean,
	setIsPopupOpen: Dispatch<SetStateAction<boolean>>
}

export const popupContext = createContext<popupContextProps | undefined>(undefined)