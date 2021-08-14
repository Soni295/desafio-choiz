import { Branch } from './Branch'
import { NavLinks } from './NavLinks'
import { QAButton } from './QAButton'
import { SlideBar } from './SlideBar'

export const NavBar = () => {
  return(
    <div className='navbar'>
      <Branch />
      <NavLinks />
      <QAButton />
    </div>
  )
}

export const Header = () => {
  return(
    <header className='header'>
      <NavBar />
      <SlideBar />
    </header>
  )
}
//
