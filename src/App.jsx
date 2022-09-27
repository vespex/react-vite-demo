import { Suspense, useState } from 'react';
import reactLogo from './assets/react.svg';
import Add from './components/Add.jsx';
import Async from './components/Async.jsx';
import { state } from './stores';
import { useSnapshot, subscribe } from 'valtio';
import './App.css';
import Input from './components/Input';

subscribe(state, () => {
  console.log('subscribe', state);
});

function App({ children }) {
  const [count, setCount] = useState(0);
  const snap = useSnapshot(state);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>store count is {snap.count}</p>
      <Add />
      <Suspense fallback={<span>loading...</span>}>
        <Async />
      </Suspense>
      <div>
        {snap.input}
        <Input />
      </div>
      {children}
    </div>
  );
}

export default App;
