// Create the observer like the examples above
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('anim-card');
            return;
        }

        entry.target.classList.remove('anim-card');
    });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const squares = document.querySelectorAll('.card-anim');

// Loop over the elements and add each one to the observer
squares.forEach((element) => observer.observe(element));