// Calculate and animate circular progress
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const circles = document.querySelectorAll('.skill-progress');
        const circumference = 2 * Math.PI * 45; // 45 is the radius
        
        circles.forEach(circle => {
            const percent = circle.getAttribute('data-percent');
            const offset = circumference - (percent / 100 * circumference);
            circle.style.strokeDasharray = circumference;
            circle.style.strokeDashoffset = offset;
        });
    }, 500);
});

// project
document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and project cards
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Initialize - show web development projects by default
    projectCards.forEach(card => {
        if (card.getAttribute('data-category') === 'webdev') {
            card.classList.add('visible');
        }
    });
    
    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                card.classList.remove('visible');
                
                if (card.getAttribute('data-category') === filterValue) {
                    card.classList.add('visible');
                }
            });
        });
    });
});
// Existing navbar toggle code
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Close navbar when clicking on a link
document.querySelectorAll('.navbar a').forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    })
});

// Close navbar when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menu.contains(e.target) && navbar.classList.contains('active')) {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

// Window resize handler
window.addEventListener('resize', () => {
    // If window width is greater than 767px, ensure navbar is visible on larger screens
    if (window.innerWidth > 767) {
        navbar.classList.remove('active');
        menu.classList.remove('bx-x');
    }
});

// Existing onscroll code
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


// 
document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and project cards
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Initialize - show web development projects by default
    projectCards.forEach(card => {
        if (card.getAttribute('data-category') === 'webdev') {
            card.classList.add('visible');
        }
    });
    
    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                card.classList.remove('visible');
                
                if (card.getAttribute('data-category') === filterValue) {
                    card.classList.add('visible');
                }
            });
        });
    });
});

