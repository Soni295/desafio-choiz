import './styles/main.scss';
import { Header } from './components/header'

export const SlideBar = () => {
  return(
    <div className='slide'>
      <p className='slide__slogan'>
        Cuidarte siempre te cuenta menos con Choiz
      </p>
    </div>
  )
}

function App() {
  return (
    <Header/>
  );
}

export default App;
