const d = document,
n = navigator;

export default function getGeolocation(id){
  const $id= d.getElementById(id),
  options = {
    enableHighAccuracy: true,// abilitar alta calidad de localizacion
    timeout: 5000,
    maximumAge: 0 //no guardar datos anteriores
  };

  const success = (position)=>{
    let coords = position.coords;
    console.log(position);

    $id.innerHTML = `
    <p>Tu posición actual es: </p>
    <ul>
      <li>Latitud: <b>${coords.latitude}</b></li>
      <li>Longitud: <b>${coords.longitude}</b></li>
      <li>Precisión: <b>${coords.accuracy}</b>metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},
    15z " target="_blanc" rel="noopener">Ver en Google Maps</a>
    `;
    // de 1 a 20z es el zoom de google maps
  };

  const error = (err)=>{
    $id.innerHTML = `<p><mark>Error${err.code}: ${err.message}</mark></p>`
    console.log(`Error${err.code}: ${err.message}`);
  };
  /* currentposition necesita(funcion exito, funcion error, opciones) */
  n.geolocation.getCurrentPosition(success, error, options)
}
// investigar "navigator.geolocation.watchPosition(success, error, options)"para seguimiento GPS
