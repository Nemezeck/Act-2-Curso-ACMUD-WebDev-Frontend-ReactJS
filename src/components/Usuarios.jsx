import { useState, useEffect } from 'react'

function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [busqueda, setBusqueda] = useState('')

  // arreglo vacio = solo se ejecuta una vez al montar el componente
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Error ' + res.status)
        return res.json()
      })
      .then((datos) => setUsuarios(datos))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [])

  const filtrados = usuarios.filter((u) =>
    u.name.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <section className="caja">
      <h2>Usuarios (API)</h2>
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {cargando && <p>Cargando...</p>}
      {error && <p className="error">No se pudieron cargar: {error}</p>}

      <ul>
        {filtrados.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> - {u.email}
          </li>
        ))}
      </ul>

      {!cargando && !error && filtrados.length === 0 && <p>Sin resultados.</p>}
    </section>
  )
}

export default Usuarios
