import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Topdeck Search</title>
        <meta name="description" content="Tool to search and sort card postings from topdeck" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Topdeck search</h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
