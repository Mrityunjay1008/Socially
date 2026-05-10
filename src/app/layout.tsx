import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "react-hot-toast";
// import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Socialy",
  description:
    "Socialy is a free, open-source, full-stack social media platform built with Next.js, Prisma, PostgreSQL, and Neon. Connect with people, share your thoughts, upload images, like and comment on posts, follow your favorite accounts, and express yourself — all in one beautifully designed, fully responsive, and lightning-fast app. Sign up instantly with your Google account and join a dynamic community where every voice matters. Whether you are here to share, explore, or connect — Socialy is your space.",
  keywords: [
    "Socialy",
    "social media",
    "open source",
    "Next.js",
    "full stack",
    "free",
    "connect",
    "posts",
    "follow",
    "like",
    "comments",
    "image upload",
    "Google login",
    "responsive",
    "dynamic",
    "community",
  ],
  authors: [{ name: "Socialy" }],
  openGraph: {
    title: "Socialy — Connect, Share & Explore",
    description:
      "Join Socialy for free. Create posts, follow people, like and comment, upload images, and build your profile on the most beautifully designed open-source social media platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Socialy — Connect, Share & Explore",
    description:
      "A free, open-source social media platform. Sign up with Google, create posts, follow people, and connect with the world.",
  },
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html
				lang="en"
				className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
				suppressHydrationWarning
			>
				<body className="min-h-full flex flex-col" suppressHydrationWarning>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<div className="min-h-screen">
							<Navbar />
							<main className="py-8">
								<div className="max-w-7xl mx-auto px-4">
									<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
										<div className="hidden lg:block lg:col-span-3">
											<Sidebar/>
										</div>
										<div className="lg:col-span-9">
											{/* <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} /> */}
											{children}
										</div>
									</div>
								</div>
							</main>
						</div>
						<Toaster/>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
