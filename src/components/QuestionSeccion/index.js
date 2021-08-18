import { QuestionsBox } from './QuestionsBox'
import { Title } from '../titles/Title'
import { useSelector } from 'react-redux';

export const QuestionSeccion = () => {
  const { frequentQuestions } = useSelector(state => state)
  console.log(frequentQuestions)
  return(
    <div className='questions-seccion'>
      <Title text='Preguntas frecuentes' />
      {
        frequentQuestions.data.map(({id, title, description, enabled})=>
          enabled
          ? <QuestionsBox
              key={id}
              title={title}
              description={description}
            />
          : null
        )
      }
    </div>
  )
}
