const ctx2 = document.getElementById('winverqor').getContext('2d');
const winverqor = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['win_verqor'],
        datasets: [{
            label: 'winverqor',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Win Verqor', // Title text here
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