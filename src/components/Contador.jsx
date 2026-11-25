import { useState, useEffect } from 'react'

function Contador() {
  const [cuenta, setCuenta] = useState(0)

  // se ejecuta cada vez que cambia "cuenta"
  useEffect(() => {
    document.title = `Contador: ${cuenta}`
  }, [cuenta])

  return (
    <section className="caja">
      <h2>Contador</h2>
      <p className="numero">{cuenta}</p>
      <div className="botones">
        <button onClick={() => setCuenta(cuenta - 1)}>-1</button>
        <button onClick={() => setCuenta(0)}>Reiniciar</button>
        <button onClick={() => setCuenta(cuenta + 1)}>+1</button>
      </div>
      <small>Mira el título de la pestaña</small>
    </section>
  )
}

export default Contador
