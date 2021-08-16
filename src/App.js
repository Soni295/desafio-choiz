import { Header } from './components/header'
import { ConsultationSeccion } from './components/ConsultationSeccion'
import { PriceSeccion } from './components/PriceSeccion'

import { useFetchAll } from './hooks/useFetchAll'
import './styles/main.scss';

function App() {
  const example = useFetchAll()
  return (
    <>
      <Header/>
      <ConsultationSeccion />
      <PriceSeccion />
    </>
  );
}

export default App;
