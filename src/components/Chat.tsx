import React, { FC, useEffect, useRef, useState } from 'react';
import '../assets/styles/chat.scss'
import ChatMessage from './ChatMessage';
import ChatSendForm from './ChatSendForm';

interface IMessage {
  id: number,
  author_id: number,
  message: string,
  time: string,
  status: string
}

const Chat:FC = () => {

  const [messages, setMessages] = useState<IMessage[]>([])
  const chatMessagesWrapperRef = useRef<HTMLDivElement>(null)

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
        },{
          id: 5,
          author_id: 1,
          message: 'Hello',
          time: '11:20',
          status: 'read'
        },
        {
          id: 6,
          author_id: 2,
          message: 'Hello',
          time: '11:20',
          status: 'read'
        },
        {
          id: 7,
          author_id: 1,
          message: 'Hello',
          time: '11:20',
          status: 'read'
        },
        {
          id: 8,
          author_id: 2,
          message: 'Hello',
          time: '11:20',
          status: 'read'
        },{
          id: 9,
          author_id: 1,
          message: 'Hello',
          time: '11:20',
          status: 'read'
        },
        {
          id: 10,
          author_id: 2,
          message: 'Hello',
          time: '11:20',
          status: 'read'
        },
        {
          id: 11,
          author_id: 1,
          message: 'Hello',
          time: '11:20',
          status: 'read'
        },
        {
          id: 12,
          author_id: 2,
          message: 'Hello',
          time: '11:20',
          status: 'read'
        }
      ]
    )
  },[])

  useEffect(() => {
    scrollChat()
  }, [messages])

  const scrollChat = () => {
    const wrapper = chatMessagesWrapperRef.current
    if(wrapper) {
      wrapper.scrollTop = wrapper.scrollHeight
    }

    console.log(chatMessagesWrapperRef.current)
  }

  const addMessage = (message:IMessage) => {
    setMessages([...messages, message])
    //scrollChat()
  }

  const author:number = 1;

  return (
    <div className='chat'>
      <div className='chat__messages-container' ref={chatMessagesWrapperRef}>
        <div className='chat__messages-inner'>
          {messages.map((message, i) => 
            <div className='chat__message-item' style={ {justifyContent: author === message.author_id ? 'flex-end' : 'flex-start'}}>
              <ChatMessage key={message.id} id={message.id} author_id={message.author_id} message={message.message} time={message.time} status={message.status} />
            </div>
          )}
        </div>
      </div>
      
      <div className='chat__input-wrapper'>
        <ChatSendForm author_id={author} send={addMessage}/>
      </div>
    </div>
  );
};

export default Chat;