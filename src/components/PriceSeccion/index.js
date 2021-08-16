import { ListOfPrices } from './ListOfPrices'
import { Title } from '../titles/Title'
import { useSelector } from 'react-redux';

export const PriceSeccion = () => {
  const { listOfPrices } = useSelector(state => state)

  return(
    <div className='price-seccion'>
      <Title text='Lista de medicamentos' />
      { listOfPrices.status === 'succeeded' ?
        <>
          <ListOfPrices category='Pastillas' items={listOfPrices.data.pills}/>
          <ListOfPrices category='Anillos' items={listOfPrices.data.rings}/>
          <ListOfPrices category='Parches' items={listOfPrices.data.patches}/>
        </>
        : null
      }
    </div>
  )
}
