import { FC, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { loggedUserId } from './_app'
import ConversationsList from '../components/ConversationsList'
import MessagesWindow from '../components/MessagesWindow'
import { Correspondant } from '../types/user'

const Home: FC = () => {
  const [selectedConversationId, setSelectedConversationId] =
    useState<number>(null)
  const [selectedCorrespondant, setSelectedCorrespondant] =
    useState<Correspondant>(null)

  const handleConversationSelection = (
    conversationId: number,
    correspondant: Correspondant
  ) => {
    setSelectedConversationId(conversationId)
    setSelectedCorrespondant(correspondant)
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
            correspondant={selectedCorrespondant}
          />
        )}
      </main>
    </div>
  )
}

export default Home
