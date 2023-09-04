import './App.css';
import Form from './Components/Form';
import Header from './Components/Header';
import Result from './Components/Result';

function App() {
  return (
    <div className="flex flex-col space-y-4 w-[50%] mx-auto justify-center min-h-screen items-center  ">
      <Header/>
      <Form/>
      <Result/>
    </div>
  );
}

export default App;
