const mostrarPaises = () => {
  
  let xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'https://restcountries.com/v3.1/region/ame', true);
  
  xhr.onload = () => {

    if ( xhr.status == 200) {
      let paises = JSON.parse(this.response);
      paises.forEach(pais => {

        const cardPais = document.createElement('div');
        const bandeiraPais = document.createElement('img');
        cardPais.innerHTML = pais.name;
        bandeiraPais.src = pais.flag;
        cardPais.appendChild(bandeiraPais);
        document.getElementById('post').appendChild(cardPais);
      
      });
    }
  }
  xhr.send();
}