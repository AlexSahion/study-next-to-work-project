import type { Metadata } from "next";
import Header from "@/components/header/Header";
import "./globals.scss";


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div className="wrapper">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
