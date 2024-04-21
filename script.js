document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const formData = new FormData(form);
        const formDataJSON = JSON.stringify(Object.fromEntries(formData));

        // Log the form data to the console (you can replace this with your desired action)
        console.log('Form Data:', formDataJSON);

        // You can send the form data to an external API or perform other actions here

        // Optional: Show a confirmation message to the user
        alert('Form submitted successfully!');
    });
});
