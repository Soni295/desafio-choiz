import { ModalStep } from './ModalStep'

const steps = [
  {
    msg: 'Completás algunas preguntas breves y nos contás el motivo de la consulta.',
    complementary: 'Vamos a elegir la doctora decuada según su especialidad y tu necesidad.',
  },
  {
    msg: 'Te contactamos por y coordinamos el pago para reservar la fecha.',
    complementary: 'Si tenés Swiss Medical es GRATIS* y si no, podes pedir un reintegro',
    comment: '*Excepto para planes que requieren copago*'
  },
  {
    msg: 'Tenes la videollamada con tu doctora, desde donde estés y sin límite de tiempo.',
    complementary: '¡Dura lo que vos necesites!',
  }
]

export const ConsultModal = ({showModal, closeModal}) => {
  return showModal ?
    <div className='modal'>
      <div className='modal__box'>
        <div onClick={closeModal} className='modal__box__head'>x</div>
        <h3 className='modal__box__title'>Paso a paso para la consulta remota</h3>
        <div className='modal__box__body'>
          { steps.map((steps, index) =>
            <ModalStep index={index + 1} {...steps} key={'steps' + index} />
          )}
        </div>
      </div>
    </div>
    :  null
}
