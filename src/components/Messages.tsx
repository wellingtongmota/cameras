import { Button } from "./ui/button"
import { IoCloseOutline } from "react-icons/io5";
import { ScrollArea } from "./ui/scroll-area";

interface MessagesProps {
  messages: string,
  onHandleClick: (arg: any) => void
}

const Messages = ({ messages, onHandleClick }: MessagesProps) => {

  const handleClick = (event: any) => onHandleClick(event)

  return (
    <div className="flex items-start">

      <ScrollArea  className="flex flex-col flex-1 mb-2 max-h-28 pr-4">
        {
          <p className="text-zinc-50">{messages}</p>
        }
      </ScrollArea>

      <Button 
        variant="link" 
        size="icon" 
        className="hover:opacity-80"
        onClick={handleClick}
      >
        <IoCloseOutline className="h-6 w-6 text-zinc-500" />
      </Button>
    </div>
  )
}

export default Messages