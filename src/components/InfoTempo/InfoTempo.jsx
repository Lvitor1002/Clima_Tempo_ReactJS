
import './InfoTempo.css'

function InfoTempo({tempo}){


    if (!tempo || !tempo.weather || !tempo.weather[0]) {
        return null; 
    }

    return(
        
        <div className="controleInfo">

            <h2 className='nome'>{tempo.name}</h2>
            
            <div className="controleTempo">

                <h2>{Math.round(tempo.main.temp)}ºC</h2>

                <img 
                    src={`http://openweathermap.org/img/wn/${tempo.weather[0].icon}.png`}
                    alt={tempo.weather[0].description}
                />

            </div>
            

            <p>{tempo.weather[0].description}</p>


            <div className="infos">

                <p>Sensação térmica: {Math.round(tempo.main.feels_like)}ºC</p>

                <p>Umidade: {tempo.main.humidity}%</p>

                <p>Pressão: {tempo.main.pressure} hPa</p>

            </div>

        </div>
            
    )
}
export default InfoTempo