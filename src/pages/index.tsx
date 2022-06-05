import { FC, useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { loggedUserId } from './_app'
import { Conversation } from '../types/conversation'
import ConversationsList from '../components/ConversationsList'

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>POC Conversation Tool</title>
        <meta name="description" content="POC Conversation Tool"></meta>
      </Head>

      <main className={styles.main}>
        {loggedUserId && <ConversationsList loggedUserId={loggedUserId} />}
      </main>
    </div>
  )
}

export default Home
