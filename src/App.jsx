import { useRef, useState } from 'react'
import axios from 'axios'
import './App.css'
import InfoTempo from './components/InfoTempo'
import Previsao from './components/Previsao'



function App() {
  
  const inputCidade = useRef()

  const [tempo, setTempo] = useState(null)

  const [previsao, setPrevisao] = useState(null)
  
  async function buscarCidade(){

    const chave = 'f21a8d622729b65c5c64a547cdfc80b6'
    const cidade = inputCidade.current.value.trim()

    try{
      
      //Para api de tempo
      const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`
      
      const {data} = await axios.get(urlApi)

      setTempo(data)
      

      //Para api de previsão de 5 dias
      const urlApiPrevisao = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`

      const previsaoResponse  = await axios.get(urlApiPrevisao)

      setPrevisao(previsaoResponse.data)


    }
    catch(error)
    {
      console.error("Erro ao buscar dados:", error)
      
      alert("Cidade não encontrada! Tente novamente.")
      
      setTempo(null);
      setPrevisao(null)
    }

  }

  return (
    <div className="controle">

      <div className="texto">
        <h1>Clima</h1>
        <p>&</p>
        <h2>Tempo</h2>
      </div>

      <div className="controleEntrada">
        
        <input  
          type="text"
          placeholder='Digite aqui o nome da cidade'
          ref={inputCidade}
        />

        <button onClick={buscarCidade}>Buscar</button>
      </div>

      {/* Enviando a variável tempo contendo os dados de tempo*/}
      {tempo && <InfoTempo tempo={tempo}/>} 
      {previsao && <Previsao previsao={previsao}/>} 
      
    </div>
  )
}

export default App
