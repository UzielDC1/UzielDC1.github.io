const form = document.getElementById('surveyForm');
const resultDiv = document.getElementById('result');
const resetLink = document.getElementById('resetLink');
const coursesContainer = document.getElementById('coursesContainer');
const addCourseButton = document.getElementById('addCourseButton');

form.addEventListener('submit', handleSubmit);
form.addEventListener('reset', handleReset);
addCourseButton.addEventListener('click', addCourse);

function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    const formData = new FormData(form);
    const courses = Array.from(document.querySelectorAll('input[name="courses[]"]'))
        .map(courseInput => courseInput.value)
        .filter(course => course.trim() !== '');

    const imageFile = formData.get('image');
    const imageUrl = imageFile ? URL.createObjectURL(imageFile) : '';

    const headerContent = `
        <h1>${formData.get('name')}</h1>
        <h2>${formData.get('mascot')}</h2>
    `;

    const mainContent = `
        <h3>Welcome</h3>
         ${imageUrl ? `<img src="${imageUrl}" alt="${formData.get('imageCaption')}" style="max-width: 100%; margin-top: 20px;">` : ''}
        <p>${formData.get('imageCaption')}</p>
        <ul>
            <li>Personal Background: ${formData.get('personalBackground')}</li>
            <li>Professional Background: ${formData.get('professionalBackground')}</li>
            <li>Background: ${formData.get('academicBackground')}</li>
            <li>Background in this Subject: ${formData.get('webDevBackground')}</li>
            <li>Primary Computer Platform: ${formData.get('primaryPlatform')}</li>
            <li>Courses I'm Taking &amp; Why:
                <ul>
                    ${courses.map(course => `<li>${course}</li>`).join('')}
                </ul>
            </li>
            <li>Funny/Interesting Item to Remember me by: ${formData.get('funnyThing')}</li>
        </ul>
       
    `;

    const headerElement = document.querySelector('header');
    const mainElement = document.querySelector('main');
    headerElement.innerHTML = headerContent;
    mainElement.innerHTML = mainContent;

    form.style.display = 'none';
    resetLink.style.display = 'inline';
}

function validateForm() {
    const requiredFields = [
        'name', 'mascot', 'imageCaption', 
        'personalBackground', 'professionalBackground', 
        'academicBackground', 'webDevBackground', 
        'primaryPlatform', 'funnyThing'
    ];

    for (const fieldId of requiredFields) {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            alert(`${fieldId.replace(/([A-Z])/g, ' $1')} is required.`);
            return false;
        }
    }

    const agreement = document.getElementById('agreement');
    if (!agreement.checked) {
        alert('You must agree to the terms.');
        return false;
    }

    const imageInput = document.getElementById('image');
    if (!imageInput.files.length) {
        alert('Please upload an image.');
        return false;
    }

    const file = imageInput.files[0];
    if (!['image/png', 'image/jpeg'].includes(file.type)) {
        alert('Image must be a PNG or JPG.');
        return false;
    }

    return true;
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
}

resetLink.addEventListener('click', function (event) {
    event.preventDefault();
    form.reset();
    handleReset();
});