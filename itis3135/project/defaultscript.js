function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

window.onload = function() {
    showSection('home');
};

document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        const section = this.getAttribute('data-section');
        showSection(section);
    });
});

let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1; 
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); 
}

showSlides();

const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const content = button.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});