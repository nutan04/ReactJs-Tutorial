import logo from './logo.svg';
import './App.css';
import NewApp from './NewApp';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import StateClass from './StateClass';
import PropsValidation from './PropsValidation';

function App() {
  return (
    <>
      <NewApp name={"Nutan Bhoyar"} />
      <FunctionalComponent />
      <ClassComponent />
      <StateClass />
      <PropsValidation />
    </>

  );
}

export default App;
