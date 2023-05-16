import './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import CardField from './components/CardField/CardField';
import SortingButton from './components/SortingButton/SortingButton';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <SortingButton></SortingButton>
      <CardField></CardField>
    </>
  );
}

export default App;
