export const getMessagesByConversationsId = async (conversationId: string) => {
  const response = await fetch(
    `http://localhost:3005/messages/${conversationId}`
  )
  const messagesResults = response.json()
  return messagesResults
}
