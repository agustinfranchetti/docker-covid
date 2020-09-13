function fetchData(x){
  fetch("https://covid-19-data.p.rapidapi.com/report/country/name?date-format=YYYY-MM-DD&format=json&date=2020-04-01&name=Argentina", {
  "method": "GET",
  "headers": {
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "4364ab3fc0msh6d3f33cf0478a2fp127ebajsn91eb032d4dad"
  }
  })
  
  .then(response => {
      return response.json();
  })
  .then(data =>{
      console.log(data);

      // grafico de torta usando Charts.js
      const html = data.map( pais => {
              var ctx = document.getElementById('myChart').getContext('2d');
              var chart = new Chart(ctx, {
              type: x,
              data: {
                  labels: ['Infectados', 'Recuperados', 'Fallecidos'],
                  datasets: [{
                      label: 'COVID-19 Argentina',
                      backgroundColor: [
                          'rgb(255, 99, 0)',
                          'rgb(255, 0, 132)',
                          'rgb(0, 99, 132)'
                      ],
                      data: [pais.provinces[0].confirmed, pais.provinces[0].recovered, pais.provinces[0].deaths]
                  }]
              },
              
      });                  
          return infectados =`<p>Fecha: ${pais.date} </p>
          <p>Infectados Totales: ${pais.provinces[0].confirmed}</p>
          <p>Recuperados: ${pais.provinces[0].recovered}</p>
          <p>Fallecidos: ${pais.provinces[0].deaths}</p>
          <p>Infectados Actualmente: ${pais.provinces[0].active}</p>`
      });
            
  })
  .catch(err => {
      console.log(err);
  });
}

fetchData("pie");
