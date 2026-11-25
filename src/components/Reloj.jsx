import { useState, useEffect } from 'react'

function Reloj() {
  const [hora, setHora] = useState(() => new Date())
  const [pausado, setPausado] = useState(false)

  useEffect(() => {
    if (pausado) return

    const intervalo = setInterval(() => {
      setHora(new Date())
    }, 1000)

    // limpieza: se borra el intervalo al pausar o al desmontar
    return () => clearInterval(intervalo)
  }, [pausado])

  return (
    <section className="caja">
      <h2>Reloj</h2>
      <p className="numero">{hora.toLocaleTimeString()}</p>
      <button onClick={() => setPausado(!pausado)}>
        {pausado ? 'Reanudar' : 'Pausar'}
      </button>
    </section>
  )
}

export default Reloj
