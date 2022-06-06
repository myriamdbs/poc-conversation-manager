export const getMessagesByConversationsId = async (conversationId: string) => {
  const response = await fetch(
    `http://localhost:3005/messages/${conversationId}`
  )
  const messagesResults = response.json()
  return messagesResults
}

export const postNewMessage = async (
  conversationId: string,
  messageContent: string,
  loggedUserId: number
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
