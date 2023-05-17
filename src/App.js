import './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import CardField from './components/CardField/CardField';
import { YMaps } from '@pbe/react-yandex-maps';

function App() {
  return (
    <>
      <YMaps>
        <Navbar></Navbar>
        <CardField></CardField>
      </YMaps>
    </>
  );
}

export default App;
