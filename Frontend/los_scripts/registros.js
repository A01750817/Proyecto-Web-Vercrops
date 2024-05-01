const ctx7 = document.getElementById('registros').getContext('2d');
const registros = new Chart(ctx7, {
    type: 'bar',
    data: {
        labels: ['reg_1', 'reg_2', 'reg_3', 'reg_4', 'reg_5'],
        datasets: [{
            label: 'registros',
            data: [12, 19, 3, 35, 6],
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
                text: 'Registros', // Title text here
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