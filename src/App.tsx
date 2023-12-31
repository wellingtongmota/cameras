import { useEffect, useState } from "react";
import { db } from "./firebase";
import { onValue, ref, update } from "firebase/database";
import Button from "./components/Button";
import Chat from "./components/Chat";

const App = () => {

  const [color1, setColor1] = useState<string>('bg-green-500');
  const [color2, setColor2] = useState<string>('bg-green-500');
  const [color3, setColor3] = useState<string>('bg-green-500');

  const buttonsRef = ref(db, 'buttons/')

  //read
  useEffect(() => {
    onValue(buttonsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setColor1(data.button1.color)
        setColor2(data.button2.color)
        setColor3(data.button3.color)
      } else {
        console.log('Data not found');
      }
    });
  }, [])

  //write with update function
  const changeColor = (button: string, color: string) => {

    resetColors()

    update(ref(db, 'buttons/' + button), {
      color: color,
    })
  }

  //update
  const resetColors = () => {

    const updates = {
      button1: { color: 'bg-green-500' },
      button2: { color: 'bg-green-500' },
      button3: { color: 'bg-green-500' }
    }

    update(buttonsRef, updates)
  }

  return (
    <main className="w-full h-[100dvh] flex items-center justify-center bg-gray-900 text-zinc-100 p-3">

      <div className="w-full md:w-80 lg:w-4/12 h-full flex flex-col justify-between gap-3">

        <div className="w-full flex flex-col flex-1 gap-3">
          <Button color={color1} onHandleClick={() => changeColor('button1', 'bg-red-600')}>01</Button>
          <Button color={color2} onHandleClick={() => changeColor('button2', 'bg-red-600')}>02</Button>
          <Button color={color3} onHandleClick={() => changeColor('button3', 'bg-red-600')}>03</Button>
        </div>

        <Button color="bg-yellow-400" onHandleClick={resetColors}>
          <p className="text-zinc-950">Liberar</p>
        </Button>

        <Chat />
      </div>
    </main>
  )
}

export default App