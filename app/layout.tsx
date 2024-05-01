import { Metadata } from "next"
import "styles/tailwind.css"

export const metadata: Metadata = {
  title: "Venusthe2FacedCat",
  description:
    "Venus The Two Face Cat is an online sensation with over 2 million followers. With an endless supply of timeless two face cat memes, Venus offers rewarding community and trading made easy for all.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://venusthe2facedcat.com/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Dekatron322/venusthe2facedcat/main/public/venus.png",
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
