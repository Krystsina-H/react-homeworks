import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Привет всем!</h1>
      <p>Уто учебный React-проект. Здесь буду выполнять задания по реакту.</p>
    </>
  );
}

export default App;
