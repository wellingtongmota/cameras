import { Button } from "./ui/button"
import { IoCloseOutline } from "react-icons/io5";

interface MessagesProps {
  messages: string,
  onHandleClick: (arg: any) => void
}

const Messages = ({ messages, onHandleClick }: MessagesProps) => {

  const handleClick = (event: any) => onHandleClick(event)

  return (
    <div className="flex items-start">

      <div className="flex flex-col flex-1 mb-2 overflow-y-scroll">
        {
          <p className="text-zinc-50">{messages}</p>
        }
      </div>

      <Button 
        variant="link" 
        size="icon" 
        className="hover:opacity-80 transition ease-in-out delay-75"
        onClick={handleClick}
      >
        <IoCloseOutline className="h-6 w-6 text-zinc-500" />
      </Button>
    </div>
  )
}

export default Messages