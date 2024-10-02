import "./globals.scss";

import type { Metadata } from "next";
import { type PropsWithChildren } from "react";
import { BaseProvider } from './_providers'


export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body>
				<BaseProvider>
					{children}
				</BaseProvider>
			</body>
		</html >
	);
}
