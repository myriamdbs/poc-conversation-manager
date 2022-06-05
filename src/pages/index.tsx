import { FC, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { loggedUserId } from './_app'
import ConversationsList from '../components/ConversationsList'
import MessagesWindow from '../components/MessagesWindow'

const Home: FC = () => {
  const [selectedConversationId, setSelectedConversationId] =
    useState<number>(null)

  const handleConversationSelection = (conversationId: number) => {
    setSelectedConversationId(conversationId)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>POC Conversation Tool</title>
        <meta name="description" content="POC Conversation Tool"></meta>
      </Head>

      <main className={styles.main}>
        {loggedUserId && !selectedConversationId && (
          <ConversationsList
            loggedUserId={loggedUserId}
            onConversationSelected={handleConversationSelection}
          />
        )}
        {selectedConversationId && (
          <MessagesWindow
            loggedUserId={loggedUserId}
            conversationId={selectedConversationId}
          />
        )}
      </main>
    </div>
  )
}

export default Home
