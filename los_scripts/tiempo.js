const ctx4 = document.getElementById('tiempo').getContext('2d');
const tiempo = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['10min', '20min', '30min', '40min', 'más de 1hr'],
        datasets: [{
            label: 'tiempo',
            data: [12, 9, 3, 5, 9],
            fill: false,
            borderColor: 'rgb(12, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Tiempo', // Title text here
                font: {
                    size: 15 // Adjust the font size as needed
                },
                color: 'rgba(255, 255, 255, 0.7)'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'rgba(255, 255, 255, 0.7)' // Change the text color here
                }
            },
            x: {
                ticks: {
                    color: 'rgba(255, 255, 255, 0.7)' // Change the text color here
                }
            }
        },
        responsive: true, // Allow the chart to be responsive
        maintainAspectRatio: false, // Do not maintain aspect ratio
        color: 'rgba(255, 255, 255, 0.7)'
    }
});