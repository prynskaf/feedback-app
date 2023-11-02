import { HeaderProps } from "@/types/types"

const Header = ({ text }: HeaderProps) => {
  return (
    <header className="bg-[#0a031d] text-[#df7979] font-extrabold">
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

export default Header
