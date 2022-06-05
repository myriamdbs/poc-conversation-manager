import { useEffect, useState } from 'react'
import { Conversation } from '../types/conversation'
import ConversationsListItem from './ConversationsListItem'

type ConversationsListPropsType = {
  loggedUserId: number
}

const ConversationsList = ({ loggedUserId }: ConversationsListPropsType) => {
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
  }, [loggedUserId])

  return (
    <>
      {conversations.map((conversation) => {
        return (
          <ConversationsListItem
            key={conversation.id}
            conversationDetails={conversation}
          />
        )
      })}
    </>
  )
}

export default ConversationsList
