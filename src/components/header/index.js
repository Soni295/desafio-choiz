import { SlideBar } from './SlideBar'
import { NavBar } from './navbar'

export const Header = () => {
  return(
    <header className='header'>
      <NavBar />
      <SlideBar />
    </header>
  )
}
