import { Header } from './components/header'
import { ConsultationSeccion } from './components/ConsultationSeccion'
import { PriceSeccion } from './components/PriceSeccion'
import { Title } from './components/titles/Title'
import { useFetchAll } from './hooks/useFetchAll'
import './styles/main.scss';

export const Question = ({question, answer}) => {
  return(
    <div className='question'>
      <div className='question__box'>
        <p>{question}</p>
      </div>
      <div>
        <p>{answer}</p>
      </div>
    </div>
  )
}


export const QuestionsBox = () => {
  return(
    <div className='questions-seccion__box'>
      <Question
        question='¿Qué es Choiz?'
        answer='Somos lo que somos'
      />
    </div>
  )
}

export const QuestionSeccion = () => {
  return(
    <div className='questions-seccion'>
      <Title text='Preguntas frecuentes' />
      <QuestionsBox />
    </div>
  )
}



function App() {
  const example = useFetchAll()
  return (
    <>
      <Header/>
      <ConsultationSeccion />
      <PriceSeccion />
      <QuestionSeccion />
    </>
  );
}

export default App;
