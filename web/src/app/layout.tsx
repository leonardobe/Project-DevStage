import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Oxanium } from "next/font/google";

export const metadata: Metadata = {
	title: "devstage",
};

const oxanium = Oxanium({
	weight: ["500", "600"],
	subsets: ["latin"],
	variable: "--font-oxanium",
});

const montserrat = Montserrat({
	weight: ["400", "600"],
	subsets: ["latin"],
	variable: "--font-montserrat",
});

/** Todo estilo aqui é aproveitado nas demais páginas */
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
			<body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top">
				<main className="max-w-[1240px] mx-auto px-5 md:py-0">{children}</main>
			</body>
		</html>
	);
}
