import { IoSend } from "react-icons/io5";
import { Button } from "./ui/button";

interface InputProps {
  text: string,
  onHandleChange: (arg: any) => void,
  onHandleClick: (arg: any) => void,
  onHandleKeyDown: (arg: any) => void,
}

const Input = ({ text, onHandleChange, onHandleClick, onHandleKeyDown }: InputProps) => {

  // funções handle
  const handleChange = (event: any) => onHandleChange(event)
  const handleClick = (event: any) => onHandleClick(event)
  const handleKeyDown = (event: any) => onHandleKeyDown(event)

  return (
    <div className="flex gap-2 content-center">
      <input 
        className="bg-gray-900 text-zinc-100 flex-1 rounded-md px-3 py-1 outline-0"
        placeholder="Mensagem"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        maxLength={150}
      />

      <Button 
        variant="link" 
        size="icon" 
        className="hover:opacity-80 transition ease-in-out delay-75"

        onClick={handleClick}
      >
        <IoSend className="h-6 w-6 text-gray-600" />
      </Button>
    </div>
  )
}

export default Input