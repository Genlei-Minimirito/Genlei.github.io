document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => (data[key] = value));

        fetch('http://localhost:3000/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Error sending message.');
            }
        })
        .catch(error => {
            alert('Error: ' + error.message);
        });
    });

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            input.classList.remove('focused');
        });
    });
});
