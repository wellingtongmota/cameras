import { useEffect, useState } from 'react'
import Input from './Input'
import { onValue, ref, remove, set } from 'firebase/database';
import { db } from '@/firebase';
import Messages from './Messages';

const Chat = () => {

  const [message, setMessage] = useState<string>('');
  const [text, setText] = useState<string>('');
  const messagesRef = ref(db, 'messages/');

  // função handle
  const handleText = (event: any) => setText(event.target.value)

  const handleKeyDown = (event: any) => {
    if (event.key == 'Enter') {
      writeMessage(text)
    }
  }

  //read
  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();

      if (data)
        setMessage(data.text)
      else
        console.log('Data not found');
    });
  }, [])

  //write
  const writeMessage = (text: string) => {
    set(ref(db, 'messages/'), {
      text: text,
    });

    setText('')
  }

  //delete
  const deleteMessages = () => {
    remove(messagesRef)
    setMessage('')
  }

  return (
    <div className="flex flex-col p-2 rounded-md bg-gray-950 ">

      {message.length != 0 &&
        <Messages messages={message} onHandleClick={deleteMessages} />
      }

      <Input
        text={text}
        onHandleChange={handleText}
        onHandleClick={() => writeMessage(text)}
        onHandleKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default Chat