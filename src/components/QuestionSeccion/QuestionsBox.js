import { useState } from 'react'

export const QuestionsBox = ({title, description}) => {
  const [open, setOpen] = useState(false)

  let arrow = 'arrow '
  arrow += open ? 'down' : 'up'

  return(
    <div className='questions-seccion__box'>
      <div className='question'>
        <div className='question__box'>
          <p>{title}</p>
          <span onClick={() => setOpen(!open)} className={arrow}/>
        </div>
        { open ? <p className='question__box__answer'>{description}</p> : null }
      </div>
    </div>
  )
}
