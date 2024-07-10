// Example JavaScript to dynamically generate course cards
document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        { title: 'Introduction to Web Development', instructor: 'John Doe', rating: 4.5 },
        { title: 'Graphic Design Fundamentals', instructor: 'Jane Smith', rating: 4.8 },
        { title: 'Data Science Essentials', instructor: 'Mike Johnson', rating: 4.2 },
        // Add more courses as needed
    ];

    const courseGrid = document.querySelector('.course-grid');

    courses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');
        card.innerHTML = `
            <h3>${course.title}</h3>
            <p>Instructor: ${course.instructor}</p>
            <p>Rating: ${course.rating}</p>
            <a href="#" class="button">Enroll Now</a>
        `;
        courseGrid.appendChild(card);
    });
});
