'use client'

import css from './information.module.scss'
import { Calculator } from 'lucide-react'
import { MainButton } from '@/shared/ui'
import { useMyContext } from '@/shared/hooks'

export const Information = () => {
	const { isPopupOpen, setIsPopupOpen } = useMyContext()

	return (
		<div className={css.information} >
			<h1 className={css.title}>
				<span>Доставка сотрудников</span> на работу и обратно в Нижнем Новгороде
			</h1>
			<div className={css.text}>
				Местоположение вашего транспорта на любом маршруте в режиме реального времени через мобильное приложение, позволяющим контролировать каждую поездку вашей организации
			</div>
			<MainButton onClick={() => setIsPopupOpen(!isPopupOpen)} icon={<Calculator />} text="Рассчитать стоимость" className={css.btn} />
		</div >
	)
}