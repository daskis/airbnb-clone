import './globals.css'
import {ReactNode} from "react";
import {Nunito} from "next/font/google";
import Navbar from "@/app/components/Navbar/Navbar";

export const metadata = {
    title: 'AirBnB',
    description: 'AirBnB clone',
}

const font = Nunito({
    subsets: ["latin"]
})
export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body className={font.className}>
        <Navbar/>
        {children}
        </body>
        </html>
    )
}
