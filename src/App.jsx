import { useSyncExternalStore } from 'react'
import { counterActions } from './actions/counterActions.js'
import { counterStore } from './stores/CounterStore.js'

export default function App() {
  const count = useSyncExternalStore(
    counterStore.subscribe,
    counterStore.getState
  )

  return (
    <main>
      <p>Текущее значение: {count}</p>
      <div>
        <button onClick={counterActions.decrement}>−1</button>
        <button onClick={counterActions.increment}>+1</button>
        <button onClick={counterActions.reset}>Сбросить</button>
      </div>
    </main>
  )
}
