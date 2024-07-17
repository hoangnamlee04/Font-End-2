import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className='bg-white fixed top-0 left-0 right-0 z-50 shadow-md'>
      <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
        <NavLink to='/' className='block text-teal-600'>
          <span className='sr-only'>Home</span>
          <img
            className='w-12 h-12 object-cover'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GaZc1eljsGsJbW9h06nxf7zTiEEuYpjf4A&s'
            alt='Logo'
          />
        </NavLink>

        <div className='flex flex-1 items-center justify-end md:justify-between'>
          <nav aria-label='Global' className='hidden md:block'>
            <ul className='flex items-center gap-6 text-sm font-semibold text-gray-500'>
              <li>
                <NavLink className='transition hover:text-gray-700' to='/'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className='transition hover:text-gray-700' to='/shop'>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink className='transition hover:text-gray-700' to='/about'>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className='transition hover:text-gray-700' to='/admin'>
                  Admin
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className='relative'>
            <input
              type='text'
              placeholder='Tìm kiếm...'
              className='border border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none'
            />
          </div>

          <div className='ml-4 text-gray-500'>
            <NavLink to='/register' className='transition hover:text-gray-700'>
              Đăng ký
            </NavLink>
            <span className='mx-2'>|</span>
            <NavLink to='/login' className='transition hover:text-gray-700'>
              Đăng nhập
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
