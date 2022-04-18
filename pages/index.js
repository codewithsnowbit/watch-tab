import Head from 'next/head'
import React from 'react'
import { NextSeo } from 'next-seo';
import 'animate.css';


export default function Home() {
  const [time, setTime] = React.useState("WatchTab")
  React.useEffect(() => {
  setTimeout(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  }, 800)
  })
  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="robots" content= "index, follow" />
      </Head>
      <NextSeo
        title={`${time} ${time === "WatchTab" ? "" : " - WatchTab"}`}
        description="Watch Tab is a simple and easy to use digital clock. It displays the current time in an elegant minimalist design and it is completely ad-free."
        canonical="https://watch-tab.now.sh/"
        openGraph={{
          url: 'https://watch-tab.now.sh/',
          title: 'Watch Tab',
          description: 'Watch Tab is a simple and easy to use digital clock. It displays the current time in an elegant minimalist design and it is completely ad-free.',
          images: [
            {
              url: 'https://watch-tab.now.sh/og-image.png',
              width: 1200,
              height: 630,
              alt: 'Watch Tab',

            },
          ],
          site_name: 'Watch Tab',
              
        }}
        twitter={{
          handle: '@codewithsnowbit',
          site: '@codewithsnowbit',
          cardType: 'summary_large_image',
        }}
    />
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-[19vw] font-black dark:selection:bg-white dark:selection:text-black selection:bg-black selection:text-white animate__animated animate__lightSpeedInLeft" suppressHydrationWarning>
          {time}
        </h1>
      </div>
    </div>
  )
}
