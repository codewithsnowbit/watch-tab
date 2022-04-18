import Head from 'next/head'
import React from 'react'
import { NextSeo } from 'next-seo';


export default function Home() {
  const [time, setTime] = React.useState("WatchTab")
  React.useEffect(() => {
  setTimeout(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  }, 1000)
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
    />
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-[19vw] font-black" suppressHydrationWarning>
          {time}
        </h1>
      </div>
    </div>
  )
}
