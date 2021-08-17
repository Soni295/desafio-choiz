import { BtnPink } from '../btns/BtnPink'
import { Separator } from '../separators/separator'
import { useModal } from '../../hooks/useModal'
import { ConsultModal } from '../modal/index'

export const ConsultationSeccion = () => {
  const { showModal, handleModal, closeModal } = useModal()

  return(
    <>
      <ConsultModal showModal={showModal} closeModal={closeModal}/>
      <div className='consultation'>
        <div className='consultation__box'>
          <p className='consultation__box__description'>
            Las mejores expertas en ginecología del
            país están a tu disposición para conversar
            sin que tengas que salir de tu casa.
          </p>
          <div>
            <BtnPink onClick={handleModal}/>
          </div>
        </div>
        <Separator />
      </div>
    </>
  )
}
