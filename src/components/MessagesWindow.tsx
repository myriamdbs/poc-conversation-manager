import { useEffect, useState } from 'react'
import { Message } from '../types/message'
import styles from '../styles/MessagesWindow.module.scss'
import { Correspondant } from '../types/user'

type MessagesWindowPropsType = {
  loggedUserId: number
  conversationId: number
  correspondant: Correspondant
}

const MessagesWindow = ({
  loggedUserId,
  correspondant,
  conversationId,
}: MessagesWindowPropsType) => {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const getMessagesByConversationsId = async (conversationId: string) => {
      const response = await fetch(
        `http://localhost:3005/messages/${conversationId}`
      )
      const messagesResults = response.json()
      return messagesResults
    }
    getMessagesByConversationsId(conversationId.toString()).then((messages) => {
      return setMessages(messages)
    })
  }, [conversationId])

  return (
    <>
      <header className={styles.header}>
        Your conversation with {correspondant.nickname}
      </header>
      <span className={styles.divider}></span>
      <div className={styles.msgWrapper}>
        {messages.map((msg) => {
          return (
            <div
              key={msg.id}
              className={
                msg.authorId === loggedUserId
                  ? styles.msgBubbleFromUser
                  : styles.msgBubbleFromCorrespondant
              }
            >
              {msg.body}
            </div>
          )
        })}
        <span className={styles.divider}></span>
      </div>
    </>
  )
}

export default MessagesWindow
