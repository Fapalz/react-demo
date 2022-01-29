import React, { FC, useEffect, useState } from 'react';
import '../assets/styles/chat.scss'
import ChatMessage from './ChatMessage';

interface IMessage {
  id: number,
  author_id: number,
  message: string,
  time: string,
  status: string
}

const Chat:FC = () => {

  const [inputMessage, setInputMessage] = useState('')
  const [messages, setMessages] = useState<IMessage[]>([])

  useEffect(() => {
    setMessages(
      [
        {
          id: 1,
          author_id: 1,
          message: 'Hello',
          time: '11:20',
          status: 'read'
        },
        {
          id: 2,
          author_id: 2,
          message: 'Hello',
          time: '11:20',
          status: 'read'
        },
        {
          id: 3,
          author_id: 1,
          message: 'Hello',
          time: '11:20',
          status: 'read'
        },
        {
          id: 4,
          author_id: 2,
          message: 'Hello',
          time: '11:20',
          status: 'read'
        }
      ]
    )
  },[])

  const sendMessage = () => {

    setInputMessage('')

    setMessages([...messages, {
      id: 1,
      author_id: 1,
      message: inputMessage,
      time: '11:20',
      status: 'read'
    }])
    
  }

  const author:number = 1;

  return (
    <div className='chat'>
      <div className='chat__messages-container'>
        {messages.map((message, i) => 
          <div className='chat__message-item' style={ {justifyContent: author === message.author_id ? 'flex-end' : 'flex-start'}}>
            <ChatMessage key={message.id} id={message.id} author_id={message.author_id} message={message.message} time={message.time} status={message.status} />
          </div>
        )}
      </div>
      
      <div className='chat__input-wrapper'>
        <input value={inputMessage} onChange={(e)=>{setInputMessage(e.target.value)}} className='chat-input' type="text" />
        <button onClick={sendMessage}>send</button>
      </div>
    </div>
  );
};

export default Chat;