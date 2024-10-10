import css from './gray-red.module.scss'
import { Calculator } from 'lucide-react'
import { BaseContainer } from '../base-container'
import { MainButton } from '../main-button'

interface InfoProps {
	name: string,
	title: string,
	text: string,
	nameButton: string,
	img: string
}

export const GrayRed = ({ name, title, text, nameButton, img }: InfoProps) => {
	return (
		<BaseContainer className={css.container}>
			<div className={css.body}>
				<div className={css.content}>
					<div className={css.name}><span>{name}</span></div>
					<div className={css.info}>
						<div className={css.title}>{title}</div>
						<div className={css.text}>{text}</div>
					</div>
					<div className={css.button}>
						<MainButton className='' icon={<Calculator />} text={nameButton} />
					</div>
				</div>
				<div className={css.img}>
					<img src={img} alt="img" />
				</div>
			</div>
		</BaseContainer>
	)
}