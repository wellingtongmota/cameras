interface ButtonProps {
  children: React.ReactNode,
  color: string,
  onHandleClick: (arg: any) => void
}

const Button = ({ children, color, onHandleClick }: ButtonProps) => {

  const handleClick = (event: any) => onHandleClick(event)

  return (
    <button
      className={"w-full h-20 font-semibold tracking-wider text-lg lg:text-xl text-slate-100 hover:opacity-80 transition ease-in-out delay-75 rounded-md " + color}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button