import { Conversation } from '../types/conversation'
import styles from '../styles/ConversationsListItem.module.scss'
import { useEffect, useState } from 'react'
import Image from 'next/image'

type ConversationsListItemPropsType = {
  conversation: Conversation
  loggedUserId: number
}
type Correspondant = {
  id: number
  nickname: string
}

const ConversationsListItem = ({
  conversation,
  loggedUserId,
}: ConversationsListItemPropsType) => {
  const [correspondant, setCorrespondant] = useState<Correspondant>(null)

  useEffect(() => {
    return loggedUserId === conversation.recipientId
      ? setCorrespondant({
          id: conversation.senderId,
          nickname: conversation.senderNickname,
        })
      : setCorrespondant({
          id: conversation.recipientId,
          nickname: conversation.recipientNickname,
        })
  }, [
    conversation.recipientId,
    conversation.recipientNickname,
    conversation.senderId,
    conversation.senderNickname,
    loggedUserId,
  ])
  return (
    <div className={styles.wrapper}>
      {correspondant?.id && (
        <Image
          src={`/../public/avatar-${correspondant.id}.png`}
          alt="Picture of the correspondant"
          width={100}
          height={100}
        />
      )}
      {correspondant && (
        <span className={styles.nickname}>{correspondant.nickname}</span>
      )}
    </div>
  )
}

export default ConversationsListItem
