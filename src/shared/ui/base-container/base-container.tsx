import css from './base-container.module.scss'
import { type HTMLAttributes, type DetailedHTMLProps } from "react"
import cn from "classnames"
import classNames from "classnames"
interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const BaseContainer = ({ className, children, ...rest }: Props) => {
	return (
		<div className={cn(css.container, className)} {...rest}>
			{children}
		</div>
	)
}