import { Item } from './Item'
import { Separator } from '../separators/separator'

export const ListOfPrices = ({category, items}) => {
  return(
    <div className='list-of-price'>
      <h3 className='list-of-price__title'>{category}</h3>
      <Separator/>
      <table>
        <thead>
          <tr>
            <th>Marcas que ofrecemos</th>
            <th>Laboratorio</th>
            <th className='price'>
              <p>Precio </p>
              <p className='comment'>(sin cobertura médica)</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map(item =>
              <Item {...item} />
          )}
        </tbody>
      </table>
    </div>
  )
}
