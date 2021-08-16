import { BtnPink } from '../btns/BtnPink'
import { Separator } from '../separators/separator'

export const ConsultationSeccion = () => {
  return(
    <div className='consultation'>
      <div className='consultation__box'>
        <p className='consultation__box__description'>
          Las mejores expertas en ginecología del
          país están a tu disposición para conversar
          sin que tengas que salir de tu casa.
        </p>
        <div>
          <BtnPink />
        </div>
      </div>
      <Separator />
    </div>
  )
}
