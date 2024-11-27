const form = document.getElementById('survey-form');
const resultDiv = document.getElementById('result');
const resetLink = document.getElementById('reset-link');
const coursesContainer = document.getElementById('courses-container');
const addCourseButton = document.getElementById('addcoursebutton');
const headerElement = document.querySelector('header');

resultDiv.style.display = 'none';
resetLink.style.display = 'none';

function validateForm() {
    const requiredFields = [
        'name', 'mascot', 'image-caption', 
        'personal-background', 'professional-background', 
        'academic-background', 'webdev-background', 
        'primary-platform', 'funny-thing'
    ];

    for (const fieldId of requiredFields) {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            alert("Please fill out all required fields.");
            return;
        }
    }
    return true;
}

function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const courses = Array.from(document.querySelectorAll('input[name="courses[]"]'))
        .map((courseInput) => courseInput.value)
        .filter((course) => course.trim() !== '');

    const imageFile = formData.get('image');
    const imageUrl = imageFile ? URL.createObjectURL(imageFile) : '';

    const headerContent = `
        <h1>${formData.get('name')}</h1>
        <h2>${formData.get('mascot')}</h2>
    `;

    const mainContent = `
        <h3>Welcome</h3>
         ${imageUrl ? `<img src="${imageUrl}" alt="${formData.get('image-caption')}">` : ''}
        <p>${formData.get('image-caption')}</p>
        <ul>
            <li>Personal Background: ${formData.get('personal-background')}</li>
            <li>Professional Background: ${formData.get('professional-background')}</li>
            <li>Background: ${formData.get('academic-background')}</li>
            <li>Background in this Subject: ${formData.get('webdev-background')}</li>
            <li>Primary Computer Platform: ${formData.get('primary-platform')}</li>
            <li>Courses I'm Taking &amp; Why:
                <ul>
                    ${courses.map((course) => `<li>${course}</li>`).join('')}
                </ul>
            </li>
            <li>Funny/Interesting Item to Remember me by: ${formData.get('funny-thing')}</li>
             <li>More: ${formData.get('anythingelse')}</li>
        </ul>
       
    `;

    headerElement.innerHTML = headerContent;
    resultDiv.innerHTML = mainContent;

    form.style.display = 'none';
    resetLink.style.display = 'block';
    resultDiv.style.display = 'block';
}

function addCourse() {
    const newCourseDiv = document.createElement('div');
    newCourseDiv.classList.add('course-entry');

    const courseInput = document.createElement('input');
    courseInput.type = 'text';
    courseInput.name = 'courses[]';
    newCourseDiv.appendChild(courseInput);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        coursesContainer.removeChild(newCourseDiv);
    };
    newCourseDiv.appendChild(deleteButton);

    coursesContainer.appendChild(newCourseDiv);
}

function handleReset() {
    resultDiv.style.display = 'none';
    form.style.display = 'block';
    resetLink.style.display = 'none';
    headerElement.innerHTML = `<div data-include="components/header.html"></div>`;
}

resetLink.addEventListener('click', function (event) {
    event.preventDefault();
    form.reset();
    handleReset();
});

form.addEventListener('submit', handleSubmit);
form.addEventListener('reset', handleReset);
addCourseButton.addEventListener('click', addCourse);