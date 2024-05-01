var ctx6 = document.getElementById('rol').getContext('2d');
    var rol = new Chart(ctx6, {
        type: 'pie',
        data: {
            labels: ['cliente', 'Fab_agro', 'Dis_agro', 'provee_seg', 'Financiera', 'Acopiador', 'Inversionista', 'Público general', 'Empresa CPG'],
            datasets: [{
                label: 'rol',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },

        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Rol', // Title text here
                    font: {
                        size: 15 // Adjust the font size as needed
                    },
                    color: 'rgba(255, 255, 255, 0.7)'
                }
            },
            responsive: true, // Allow the chart to be responsive
            maintainAspectRatio: false, // Do not maintain aspect ratio
            color: 'rgba(255, 255, 255, 0.7)'
        }
    });
