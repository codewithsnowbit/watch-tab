import Head from 'next/head'
import React from 'react'
import { NextSeo } from 'next-seo';
import 'animate.css';


export default function Home() {
  const [time, setTime] = React.useState("WatchTab - Minimalist Online Clock");
  const [date, setDate] = React.useState([])
  React.useEffect(() => {
  setTimeout(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: "numeric", second: "numeric", hour12: false }))
      // display date with the name of the month and the day without the year
      setDate(new Date().toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric' }))
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
        canonical="https://watch.dhairyashah.dev/"
        openGraph={{
          url: 'https://watch.dhairyashah.dev/',
          title: 'WatchTab - Minimalist Online Clock',
          description: 'Watch Tab is a simple, minimalist and easy to use digital clock. It displays the current time in an elegant minimalist design and it is completely ad-free.',
          images: [
            {
              url: 'https://watch.dhairyashah.dev/og-image.png',
              width: 1200,
              height: 630,
              alt: 'Watch Tab',

            },
          ],
          site_name: 'WatchTab - Minimalist Online Clock',
              
        }}
        twitter={{
          handle: '@dhairyashah_dev',
          site: '@dhairyashah_dev',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            property: 'keywords',
            content: "clock, alarm clock, world clock, timer clock, analog clock, clock tab, clock in browser tab"
          }
        ]}
    />
      <div className="flex justify-center items-center h-screen flex-col ">
        <h1 className="text-[19vw] font-black
        dark:selection:bg-white dark:selection:text-black selection:bg-black selection:text-white animate__animated animate__lightSpeedInLeft" suppressHydrationWarning>
          {time === "WatchTab - Minimalist Online Clock" ? "WatchTab" : time}
        </h1>
        <h3 className="text-black text-[6vw] 
        dark:text-white dark:selection:bg-white dark:selection:text-black selection:bg-black selection:text-white">{date}</h3>
      </div>
    </div>
  )
}
