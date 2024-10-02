import { type PropsWithChildren } from "react";
import { Header, Footer } from "@/widgets";

export const BaseProvider = ({ children }: PropsWithChildren) => {
	return (
		<div className="wrapper">
			<Header />

			<main className="main">
				{children}
			</main>

			<Footer />
		</div>
	);
}