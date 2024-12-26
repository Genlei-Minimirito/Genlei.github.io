document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
    });

    // Mobile menu toggle
    function toggleMenu() {
        var dropdownMenu = document.getElementById('dropdownMenu');
        dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
    }
    
// JavaScript to toggle dropdown menu
document.addEventListener("DOMContentLoaded", function() {
    const hamburg = document.querySelector(".hamburg");
    const dropdown = document.querySelector(".dropdown");
    
    hamburg.addEventListener("click", function() {
        dropdown.classList.toggle("active");
    });
});



    // Bar graph for programming languages
    var ctx1 = document.getElementById('programmingLanguagesChart').getContext('2d');
    var programmingLanguagesChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'],
            datasets: [{
                label: 'Knowledge Level',
                data: [90, 85, 80, 75, 70],
                backgroundColor: [
                    '#007BFF',
                    '#EF233C',
                    '#FF5733',
                    '#33FF57',
                    '#FFD700'
                ]
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.label + ': ' + context.raw + '%';
                        }
                    }
                }
            }
        }
    });

    // Bar graph for work skills
    var ctx2 = document.getElementById('workSkillsChart').getContext('2d');
    var workSkillsChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Project Management', 'Communication', 'Problem-Solving', 'Teamwork', 'Adaptability'],
            datasets: [{
                label: 'Skill Level',
                data: [85, 90, 80, 85, 75],
                backgroundColor: [
                    '#007BFF',
                    '#EF233C',
                    '#FF5733',
                    '#33FF57',
                    '#FFD700'
                ]
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.label + ': ' + context.raw + '%';
                        }
                    }
                }
            }
        }
    });
});
