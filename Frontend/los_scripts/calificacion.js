const ctx = document.getElementById('calificacion').getContext('2d');
const calificacion = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1_star', '2_star', '3_star', '4_star', '5_star'],
        datasets: [{
            label: 'calificacion',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Calificaciones', // Title text here
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