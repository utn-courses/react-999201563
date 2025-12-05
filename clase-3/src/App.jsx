import './App.css'

// UN COMPONENTE ES UNA FUNCIÓN QUE RETORNA JSX
function PruebaDeComponente() {
  return (
    <>
      <h2>Hola desde el componente de prueba</h2>
      <ul>
        <li>Frutilla</li>
        <li>Ananá</li>
        <li>Melón</li>
      </ul>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1>Hola! Mi primer saludo en react!</h1>
  )
}

export { PruebaDeComponente, App }
