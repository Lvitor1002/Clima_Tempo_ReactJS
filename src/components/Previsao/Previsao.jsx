import './Previsao.css'


function Previsao({previsao}){

    let dias = {}

    previsao.list.forEach((dia) => {

        // Convertendo o número de timestamp retornado pela API/json em uma data legível
        const date = new Date(dia.dt * 1000).toLocaleDateString()

        //Se a data não for repetida.. então crie no objeto um dia
        if(!dias[date]){

            dias[date] = dia
        }
    })

    const proximosDias = Object.values(dias).slice(1,6)

    function converteData(date){

        const novaData = new Date(date.dt * 1000).toLocaleDateString('pt-BR',{weekday: 'long',day: '2-digit'})

        return novaData

    }
    

    return(
            <div className="controlePrevisao">

                <h3>Próximos 5 Dias</h3>

                <div className="listaPrevisao">
                    
                    {proximosDias.map((dia)=>(

                        <div className='previsao' key={dia.id}>

                            <p>{converteData(dia)}</p>

                            <img 
                                src={`http://openweathermap.org/img/wn/${dia.weather[0].icon}.png`}
                                alt={dia.weather[0].description}
                            />

                            <p id='idDesc'>{dia.weather[0].description}</p>

                            <h2>{Math.round(dia.main.temp)}ºC</h2>

                            <div className="controleTemp">

                                <p>{Math.round(dia.main.temp_min)}ºC Mín.</p>
                                <p>{Math.round(dia.main.temp_max)}ºC Máx.</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

    )
}

export default Previsao