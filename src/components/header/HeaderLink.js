export const HeaderLink = ({href='#', linkName='example'}) => {
  return(
    <a
      className='header__links__link'
      href={href}
    >
      {linkName}
    </a>
  )
}
