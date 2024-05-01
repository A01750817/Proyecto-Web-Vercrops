const url = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

fetch(url).then((result) => result.json()).then((datapoint) => {
  const countries = ChartGeo.topojson.feature(datapoint, datapoint.objects.countries).features;
  //console.log(countries [0].properties.name);

// setup 
const data = {
  labels: countries.map(country => country.properties.name),
  datasets: [{
    label: 'Countries',
  data: countries.map(country => ({feature: country, value: Math.random()/*12*/})),
  }]
};

// config 
const config = {
  type: 'choropleth',
  data,
  options: {
    scales:{
      xy: {
        projection: 'equalEarth'        
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
          display: true,
          text: 'Mapa', // Title text here
          font: {
              size: 15 // Adjust the font size as needed
          },
          color: 'rgba(255, 255, 255, 0.7)'
      },
    },
    responsive: true, // Allow the chart to be responsive
    maintainAspectRatio: false, // Do not maintain aspect ratio
    color: 'rgba(255, 255, 255, 0.7)'
  }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;
})