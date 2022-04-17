import Head from 'next/head'
import React from 'react'
import { NextSeo } from 'next-seo';


export default function Home() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString())
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  })
  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <NextSeo
        title="Watch Tab"
        description="Watch Tab is a simple and easy to use digital clock. It displays the current time in an elegant minimalist design and it is completely ad-free."
    />
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-[19vw] font-black" suppressHydrationWarning>
          {time}
        </h1>
      </div>
    </div>
  )
}
