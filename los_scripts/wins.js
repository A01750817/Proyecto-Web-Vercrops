var ctx5 = document.getElementById('wins').getContext('2d');
    var wins = new Chart(ctx5, {
        type: 'bar',
        data: {
            labels: ['win_1'],
            datasets: [{
                label: 'wins',
                data: [12],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Wins', // Title text here
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