import { Conversation } from '../types/conversation'

type ConversationsListItemPropsType = {
  conversationDetails: Conversation
}

const ConversationsListItem = ({
  conversationDetails,
}: ConversationsListItemPropsType) => {
  return <>{conversationDetails.id}</>
}

export default ConversationsListItem
