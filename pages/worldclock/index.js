import Head from 'next/head';
import Link from 'next/link';
import Links from '../../components/Links';

import Image from 'next/image'

export default function Home() {

  return (
    <div>
      <Head>
        <title>iAbhishek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Links />
    </div>
  )
}
