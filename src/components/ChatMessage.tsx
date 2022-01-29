import React, { FC } from 'react';
import '../assets/styles/chat-message.scss'

interface ChatMessageProps {
  id: number
  author_id: number
  message: string
  time: string
  status: string
}


const ChatMessage:FC<ChatMessageProps> = ({message, time, status, author_id}) => {
  
  return (
    <div className='chat-message'>
      <div className='chat-message__text'>{message}</div>
      <div className='chat-message__time'>{time}</div>
      <div className='chat-message__status'>{status}</div>
    </div>
  );
};

export default ChatMessage;