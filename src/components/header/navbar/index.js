import { Branch } from './Branch'
import { NavLinks } from './NavLinks'
import { QAButton } from './QAButton'

export const NavBar = () => {
  return(
    <div className='navbar'>
      <Branch />
      <NavLinks />
      <QAButton />
    </div>
  )
}
