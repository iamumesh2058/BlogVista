import Link from "next/link"
import Links from "./links/links"

const Navbar = () => {

  return (
    <div className="flex justify-between items-center h-20">
      <Link href={'/'} className="text-xl font-bold">Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Navbar