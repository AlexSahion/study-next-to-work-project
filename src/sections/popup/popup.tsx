'use client'

import css from './popup.module.scss'
import { useState } from 'react'
import { useMyPopup } from '@/shared/hooks'
import cn from 'classnames'
import { Form } from './ui'
import { BaseContainer } from '@/shared/ui'


export const Popup = () => {
	const [isChecked, setIsChecked] = useState(false)
	const { isPopupOpen, setIsPopupOpen } = useMyPopup()

	const handleOnChange = () => {
		setIsChecked(!isChecked)
	}

	return (
		<section className={cn(css.popup, { [css.active]: isPopupOpen })}>
			<div onClick={() => setIsPopupOpen(!isPopupOpen)} className={css.block}></div>
			<div className={css.body}>
				<div className={css.content}>
					<Form isChecked={isChecked} handleOnChange={handleOnChange} />
					<div className={css.picture}>
						<div className={css.img}>
							<img src="img/questions.png" alt="img" />
						</div>
					</div>
				</div>
			</div>
		</section >
	)
}