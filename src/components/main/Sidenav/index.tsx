import { sidenavItems } from '@/data'
import SidenavGroup from './SidenavGroup'
import { useSideNavStore } from '@/store/zustand'

const Sidenav = () => {
  const { isActive } = useSideNavStore()
  return (
    <nav className={`h-dvh ${isActive ? "translate-x-0" : "-translate-x-full" } w-full lg:w-auto  lg:translate-x-0 ease-in-out  duration-300 fixed z-20 left-0 bg-background-secondary min-w-72 border-r border-slate-800`} >
        <div className='logo py-6 px-6 flex justify-start lg:justify-center items-center border-b relative border-slate-800'>
            <img src='/logo-white.png' className='w-[160px]' alt='logo' />
        </div>
        <ul className='space-y-10 py-14'>
          {sidenavItems.map((group) => (
            <SidenavGroup items={group.items} title={group.title} key={group.id} />
          ))}
        </ul>
    </nav>
  )
}

export default Sidenav