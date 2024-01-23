import { ReactNode } from "react"

const Card = ({
  className,
  children
} : {
  className?: string
  children: ReactNode
}) => {
  return (
    <div className="bg-slate-50 rounded-lg p-2 m-2 shadow md:w-[350px]">
      { children }
    </div>
  )
}

export default Card;