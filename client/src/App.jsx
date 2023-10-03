import React from 'react'
import Lista from './pages/programas_de_estudio';

function App({ list }) {
  if (getCookie("Credentials") == "") {
    window.location.href = "/";
  }
  return (
    <div>
      <Lista />
    </div>
  )
}

export default App;
