import { CircularIcon } from '../icons/CircularIcon'

export const ModalStep = ({msg, complementary, comment, index}) => {
  return(
    <div className='modal__box__body__step'>
      <CircularIcon />
      <p className='number'>{index}.</p>
      <p className='message'>{msg}</p>
      <p className='message-complementary'>{complementary}</p>
      <p className='comment'>{comment}</p>
    </div>
  )
}
