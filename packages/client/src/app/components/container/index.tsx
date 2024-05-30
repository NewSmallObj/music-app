import Menu from "../menu/index";
import Navigation from "../navigation/index";

interface ContainerType {
  children: React.ReactNode
}

const Container = ({children}:ContainerType)=>{
  return (
    <div className="w-full h-full flex justify-start flex-row xl:flex-col">
      <div className="navbar bg-base-100 px-0 xl:px-8 box-border shadow-md hidden md:block w-[200px] xl:flex xl:w-full">
        <div className="flex-1 md:flex md:flex-col xl:flex-row">
          <a className="text-xl py-4 xl:px-0">daisyUI</a>
          <Menu />
        </div>
        <div className="flex-none hidden xl:block">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1 pb-[64px] md:pb-0">
        { children }
      </div>
      <Navigation />
    </div>
  )
}

export default Container;