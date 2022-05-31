import { FC, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../assets/lbc-logo.webp'
import styles from '../styles/Home.module.css'
import { loggedUserId } from './_app'
import { Conversation } from '../types/conversation'

const Home: FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([])

  useEffect(() => {
    const getConversationsByUserId = async (userId: string) => {
      const response = await fetch(
        `http://localhost:3005/conversations/${userId}`
      )
      const conversationsResults = response.json()
      console.log(conversationsResults)
      return conversationsResults
    }
    getConversationsByUserId(loggedUserId.toString()).then((conversations) => {
      return setConversations(conversations)
    })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>POC Conversation Tool</title>
        <meta name="description" content="POC Conversation Tool"></meta>
      </Head>

      <main className={styles.main}>
        {conversations.map((conversation) => {
          return <div key={conversation.id}>{conversation.id}</div>
        })}
      </main>
    </div>
  )
}

export default Home
