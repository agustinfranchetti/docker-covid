
var chart;
function fetchData(x){
    fetch("https://covid-19-statistics.p.rapidapi.com/reports?iso=ARG", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
		"x-rapidapi-key": "936e6aaeb9mshc54f929671c461ep173920jsnb8d840ee9bcb"
	}
  })
  .then(response => {
      return response.json();
  })
  .then(data =>{
      console.log(data);
      datajs = Object.values(data)
      console.log(datajs)  
      // grafico de torta usando Charts.js
              const html = datajs.map( pais => {              
              var ctx = document.getElementById('myChart').getContext('2d');
              if (chart){chart.destroy();
                         console.log("grafico destruído");
                        }
              chart = new Chart(ctx, {
              type: x,
              data: {
                  labels: ['Infectados', 'Recuperados', 'Fallecidos'],
                  datasets: [{
                      label: 'COVID-19 Argentina',
                      backgroundColor: [
                          'rgba(66,145,219, 0.9)',
                          'rgba(61,242,126, 0.9)',
                          'rgba(235,45,29, 0.9)'
                      ],
                      data: [pais[0].confirmed_diff, pais[0].recovered_diff, pais[0].deaths_diff]
                  }]
              },
              options: {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                },
            }    
      });              
          return pais;
      });       
  })
  .catch(err => {
      console.log(err);
  });
}

fetchData("pie");

