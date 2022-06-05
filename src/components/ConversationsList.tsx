import { useEffect, useState } from 'react'
import { Conversation } from '../types/conversation'
import ConversationsListItem from './ConversationsListItem'

type ConversationsListPropsType = {
  loggedUserId: number
  onConversationSelected: (conversationId: number) => void
}

const ConversationsList = ({
  loggedUserId,
  onConversationSelected,
}: ConversationsListPropsType) => {
  const [conversations, setConversations] = useState<Conversation[]>([])

  useEffect(() => {
    const getConversationsByUserId = async (userId: string) => {
      const response = await fetch(
        `http://localhost:3005/conversations/${userId}`
      )
      const conversationsResults = response.json()
      return conversationsResults
    }
    getConversationsByUserId(loggedUserId.toString()).then((conversations) => {
      return setConversations(conversations)
    })
  }, [loggedUserId])

  const handleConversationSelection = (conversationId: number) => {
    onConversationSelected(conversationId)
  }

  return (
    <>
      {conversations.map((conversation) => {
        return (
          <ConversationsListItem
            key={conversation.id}
            conversation={conversation}
            loggedUserId={loggedUserId}
            onConversationSelected={handleConversationSelection}
          />
        )
      })}
    </>
  )
}

export default ConversationsList
