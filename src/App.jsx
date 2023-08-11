import useCount from "./hooks/useCount"

function App() {
  const { count, increment, decrement, reset } = useCount()
  return (
    <>
      <h2>Contador: {count}</h2>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetear</button>
    </>
  )
}
export default App
