import { type PropsWithChildren } from "react";
import { PopupContext } from "./popup-provider";
import { Header, Footer } from "@/widgets";

export const BaseProvider = ({ children }: PropsWithChildren) => {
	return (
		<div className="wrapper">
			<PopupContext>
				<Header />

				<main className="main">
					{children}
				</main>

				<Footer />
			</PopupContext>
		</div>
	);
}