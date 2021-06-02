import Head from 'next/head'
import React from 'react'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span role="img" aria-label="smile">
            😃 Hey, Welcome
          </span>
          <h1>
            News about the <span>React</span> Wordls.
          </h1>
          <p>
            Get acess to all the publiced <br />
            <span>for $10.00 month</span>
          </p>

          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="sua foto" />
      </main>
    </>
  )
}
