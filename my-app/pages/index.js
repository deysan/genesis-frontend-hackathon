import Head from 'next/head'
import Image from 'next/image'

import Home from '../components/Home/Home'

export default function App() {
  return (
    <div>
      <Head>
        <title>Delta App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home />
      </main>
    </div>
  )
}
