import React, { FC, FormEvent, useRef, useState } from 'react';
import '../../assets/styles/chat-send-form.scss'


interface ChatSendFormProps {
  send: Function,
  author_id: number
}

const ChatSendForm:FC<ChatSendFormProps> = ({send, author_id, ...props}) => {
  const [inputMessage, setInputMessage] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)


  const setFocus = () => {
    inputRef.current?.focus()
  }

  const sendMessage = (e:FormEvent) => {
    e.preventDefault()
    setInputMessage('')
    const date = new Date()
    const time = `${date.getHours()}:${date.getMinutes()}`

    send({
      id: Date.now(),
      author_id: author_id,
      message: inputMessage,
      time: time,
      status: 'read'
    })
    
  }

  return (
    <form action="" onSubmit={sendMessage} {...props}>
        <div className='chat-send-form'>
          <input ref={inputRef} value={inputMessage} onChange={(e)=>{setInputMessage(e.target.value)}} className='chat-send-form__input' type="text" />
          <button onClick={setFocus} className='chat-send-form__button' type='submit'>send</button>
        </div>
      </form>
  );
};

export default ChatSendForm;