import { Header } from './components/header'
import { ConsultationSeccion } from './components/ConsultationSeccion'
import { PriceSeccion } from './components/PriceSeccion'
import { QuestionSeccion } from './components/QuestionSeccion'
import { useFetchAll } from './hooks/useFetchAll'
import { Footer } from './components/footer'
import './styles/main.scss';

function App() {
  const example = useFetchAll()
  return (
    <>
      <Header/>
      <ConsultationSeccion />
      <PriceSeccion />
      <QuestionSeccion />
      <Footer />
    </>
  );
}

export default App;
