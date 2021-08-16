export const Item = ({brand, laboratory, price}) => {
  return(
    <tr>
      <td>{brand}</td>
      <td>{laboratory}</td>
      <td>{price}</td>
    </tr>
  )
}
