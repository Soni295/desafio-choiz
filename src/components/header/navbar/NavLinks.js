import { HeaderLink } from './HeaderLink'

export const NavLinks = () => {
  const links = [
    { linkName: 'Tratamientos' },
    { linkName: 'Consulta online' },
    { linkName: 'Quiénes somos' },
    { linkName: 'Preguntas frecuentes' },
    { linkName: 'Contacto' }
  ]
  return(
    <div className='navbar__links'>
      {links.map((link, index)=>
        <HeaderLink {...link}
          key={index + 'link'}
        />
      )}
    </div>
  )
}
