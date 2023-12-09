import { Link } from "react-router-dom"

export default function header() {
  return (
    <div className='bg-slate-300'>
    <div className='flex justify-between items-center max-w-4xl mx-auto p-3'>
      <Link to='/'>
      <h1 className='font-bold'>AUTHAPP</h1>
      </Link>
      <ul className='flex gap-4'>
        <Link to='/'>
        <li>Home</li>
        </Link>

        <Link to='/about'>
        <li>About</li>
        </Link>

        <Link to='/Sign-in'>
        <li>Sign In</li>
        </Link>

      </ul>
    </div>
    </div>
  )
}
