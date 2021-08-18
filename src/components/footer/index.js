import { Icon } from './Icon'
import { Branch } from './Branch'

export const Footer = () => {
  return(
    <div className='footer'>
      <div className='footer__left'>
        <Branch />
        <p className='copyrights'>
           © XCALE HEALTH srl.
           Todo los derechos reservados.
        </p>
      </div>
      <div className='footer__right'>
        <p>¡Hablemos!</p>
        <div className='footer__right__icons'>
          <Icon />
          <Icon />
          <Icon />
          <Icon />
        </div>
      </div>
    </div>
  )
}
