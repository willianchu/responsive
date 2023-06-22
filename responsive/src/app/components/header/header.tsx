import Image from 'next/image'
import './header.scss'

export function Header() {
  return(
    <div className="header">
      <div>
        <h1> Greetings </h1>
        <h2> Description </h2>
      </div>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
    </div>
  )
}