import Logo from './Logo'

const Navbar = () => {
  const handleClick = () => {
    window.location.href = "https://github.com/akash2904r/WEB-DEVELOPMENT"
  }

  return (
    <section>
      <nav className='flex justify-between items-center p-3 md:px-6 lg:px-12 bg-sky-950'>
        <Logo color="white" />
        <button 
          className='github flex gap-3 items-center bg-green-600 w-fit p-1 rounded-full outline outline-2 outline-white'
          onClick={handleClick}
        >
          <img 
            src="/github.svg" 
            alt="github" 
            className='w-7 h-7'
          />
          <span className='font-medium text-lg text-white'>GitHub</span>
        </button>
      </nav>
    </section>
  )
}

export default Navbar
