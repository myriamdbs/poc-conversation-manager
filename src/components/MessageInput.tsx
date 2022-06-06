import { ChangeEvent, FormEvent, useState } from 'react'
import { loggedUserId } from '../pages/_app'
import styles from '../styles/MessageInput.module.scss'

type MessageInputPropsType = {
  conversationId: number
  onSubmit: () => void
}

const MessageInput = ({ conversationId, onSubmit }: MessageInputPropsType) => {
  const [messageContent, setMessageContent] = useState<string>('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  const postNewMessage = async (
    conversationId: string,
    messageContent: string
  ) => {
    const date = new Date().toDateString()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        body: messageContent,
        timestamp: Date.parse(date) / 1000,
        authorId: loggedUserId,
        conversationId: conversationId,
      }),
    }

    await fetch(
      `http://localhost:3005/messages/${conversationId}`,
      requestOptions
    )
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setMessageContent(event.target.value)
    setBtnDisabled(false)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBtnDisabled(true)
    postNewMessage(conversationId.toString(), messageContent)
    setMessageContent('')
    onSubmit()
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        type="text"
        id="new-message"
        placeholder="Enter your message here"
        value={messageContent}
        onChange={handleChange}
        className={styles.input}
      />
      <button type="submit" disabled={btnDisabled} className={styles.submitBtn}>
        {'>'}
      </button>
    </form>
  )
}

export default MessageInput
