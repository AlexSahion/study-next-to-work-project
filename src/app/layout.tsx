import type { Metadata } from "next";
import Header from "@/widgest/header/Header";
import Footer from "@/widgest/footer/Footer";
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

					<main className="main">
						{children}
					</main>

					<Footer />
				</div>
			</body>
		</html>
	);
}
