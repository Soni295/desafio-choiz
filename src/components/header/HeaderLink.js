export const HeaderLink = ({href='#', linkName='example'}) => {
  return(
    <a
      className='navbar__links__link'
      href={href}
    >
      {linkName}
    </a>
  )
}
