
function Header() {
  return (
    <div className="mx-auto  bg-light p-10 flex flex-row isolate z-50 left-0 right-0 overflow-hidden items-center justify-center align-center">
        <div className="basis-1/3 flex items-center pl-14">
            <img src="/ASSETS/komorebi-logo.png" className="h-14"/>
        </div>

        <div className="basis-1/3 flex flex-row gap-10 font-bold text-dark text-center">
            <a href="#" className="duration-200 hover:text-lgreen"> HOME </a>
            <a href="#" className="duration-200 hover:text-lgreen"> EXPERIENCE </a>
            <a href="#" className="duration-200 hover:text-lgreen"> PORTFOLIO </a>
            <a href="#" className="duration-200 hover:text-lgreen"> CASE </a>
            <a href="#" className="duration-200 hover:text-lgreen"> CONTACT </a>
        </div>

        <div className="basis-1/3 flex flex-row gap-5 items-center justify-center align-center text-2xl  text-dark">

            <i className="hover:text-lgreen duration-200 lni lni-github-original"></i>
            <i className="hover:text-lgreen duration-200 lni lni-discord-alt"></i>
            <i className="hover:text-lgreen duration-200 lni lni-linkedin-original"></i>
        </div>
    </div>
  )
}

export default Header
