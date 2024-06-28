// DONE REVIEWING: GITHUB COMMIT 1️⃣
/* eslint camelcase: "off" */
import {IBM_Plex_Sans_Arabic} from "next/font/google"
import {PropsWithChildren} from "react"
import "../styles/global.css"
import Providers from "./providers"

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
})

const Layout = function Layout({children}: PropsWithChildren) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <head />
      <body className={ibmPlexSansArabic.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default Layout
