import { Outlet } from 'react-router-dom'
import AuthSidePanel from '../AuthSidePanel'

const AuthLayout = () => {
  return (
    <div className='h-svh w-full overflow-hidden flex p-6 max-w-[1920px] mx-auto'>
        <Outlet   />
        <AuthSidePanel />
    </div>
  )
}

export default AuthLayout