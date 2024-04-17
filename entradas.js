const ctx0 = document.getElementById('entradas').getContext('2d');
const entradas = new Chart(ctx0, {
    type: 'line',
    data: {
        labels: ['entry_1', 'entry_2', 'entry_3', 'entry_4', 'entry_5'],
        datasets: [{
            label: 'entradas',
            data: [12, 19, 3, 5, 2],
            fill: false,
            borderColor: 'rgb(255, 51, 255)',
            tension: 0.1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Entradas', // Title text here
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