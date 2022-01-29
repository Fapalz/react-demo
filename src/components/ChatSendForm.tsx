import React, { FC, FormEvent, useState } from 'react';
import '../assets/styles/chat-send-form.scss'


interface ChatSendFormProps {
  send: Function,
  author_id: number
}

const ChatSendForm:FC<ChatSendFormProps> = ({send, author_id, ...props}) => {
  const [inputMessage, setInputMessage] = useState('')
  
  const sendMessage = (e:FormEvent) => {
    e.preventDefault()
    setInputMessage('')
    const date = new Date()
    const time = `${date.getHours()}:${date.getMinutes()}`

    send({
      id: 1,
      author_id: author_id,
      message: inputMessage,
      time: time,
      status: 'read'
    })
    
  }

  return (
    <form action="" onSubmit={sendMessage} {...props}>
        <div className='chat-send-form'>
          <input value={inputMessage} onChange={(e)=>{setInputMessage(e.target.value)}} className='chat-send-form__input' type="text" />
          <button className='chat-send-form__button' type='submit'>send</button>
        </div>
      </form>
  );
};

export default ChatSendForm;