import { ReactNode } from "react"

const Container = ({
  className,
  children
} : {
  className?: string
  children: ReactNode
}) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2 md:px-20">
      { children }
    </div>
  )
}

export default Container;