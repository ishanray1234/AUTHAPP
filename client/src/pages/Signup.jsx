import {Link} from 'react-router-dom'

export default function Signup() {
  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SIGN UP</h1>
      <form className='flex flex-col gap-4' action="">
        <input className='bg-slate-100 p-3 rounded-lg' type="text" placeholder='Username' id='username' />
        <input className='bg-slate-100 p-3 rounded-lg' type="email" placeholder='Email' id='Email' />
        <input className='bg-slate-100 p-3 rounded-lg' type="password" placeholder='Password' id='Password' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/sign-in'><span className='text-blue-500'>Sign In</span></Link>
        
      </div>
    </div>
  )
}
