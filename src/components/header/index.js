import { Branch } from './Branch'
import { NavLinks } from './NavLinks'
import { QAButton } from './QAButton'

export const Header = () => {
  return(
    <header className='header'>
      <Branch />
      <NavLinks />
      <QAButton />
    </header>
  )
}
