"use client";

import { BaseContainer } from '@/shared/ui'
import css from './answers-questions.module.scss'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import cn from "classnames"
import { Titles } from '@/shared/ui'
import { itemAccordion } from './model'

export const AnswersQuestions = () => {
	const [activeBlock, setActivetBlock] = useState<number | null>(null);

	const toogleAccordion = (index: number) => {
		setActivetBlock(activeBlock === index ? null : index)
	}

	return (
		<section className={css.answersQuestions}>
			<BaseContainer className={css.container}>
				<Titles afterSpan='' beforeSpan='Отвечаем на часто задаваемые ' span='вопросы' subtitle='FAQ' />
				<div className={css.items}>
					{itemAccordion.map((item, index) => (
						<div onClick={() => toogleAccordion(index)} key={index} className={cn(css.item, { [css.active]: index === activeBlock })}>
							<div className={css.header}>
								<div className={css.title}>{item.title}</div>
								<div className={css.icon}><ChevronDown size={30} /></div>
							</div>
							<div className={css.text}>{item.text}</div>
						</div>
					))}
				</div>
			</BaseContainer>
		</section >
	)
}