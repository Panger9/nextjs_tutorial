import Link from "next/link";
import Logo from "./dojo-logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Image 
          src={Logo}
          alt="Dojo Helpdesk Logo"
          width={70}
          quality={100}
          placeholder="blur"
        />
        <h1>Dojo Helpdesk</h1>
        <Link href="/">Home</Link>
        <Link href="/tickets">Tickets</Link>
      </nav>
    </div>
  )
}
