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
              var chart = new Chart(ctx, {
              type: x,
              data: {
                  labels: ['Infectados', 'Recuperados', 'Fallecidos'],
                  datasets: [{
                      label: 'COVID-19 Argentina',
                      backgroundColor: [
                          'rgba(155, 0, 0, 0.5)',
                          'rgba(0, 155, 0, 0.5)',
                          'rgba(0, 0, 155, 0.5)'
                      ],
                      data: [pais[0].confirmed, pais[0].recovered, pais[0].deaths]
                  }]
              },
              options: {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        fontColor: 'white'
                    }
                },
                options: {
                    
                }
                
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
