export const BtnPink= ({onClick, ...rest}) => {
  return(
    <button
      className='btn-pink'
      onClick={onClick}
      {...rest}
    >Agregar una consulta</button>
  )
}
