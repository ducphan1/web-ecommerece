document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); 
            const nameField = document.querySelector('input[placeholder="Your Name *"]');
            const emailField = document.querySelector('input[placeholder="Your Email *"]');
            const phoneField = document.querySelector('input[placeholder="Your Phone *"]');
            const messageField = document.querySelector('textarea[placeholder="Your Message"]');
            if (!nameField || !emailField || !phoneField || !messageField) {
                alert('Không tìm thấy các trường nhập liệu!');
                return;
            }

            const name = nameField.value.trim();
            const email = emailField.value.trim();
            const phone = phoneField.value.trim();
            const message = messageField.value.trim();
            if (!name || !email || !phone || !message) {
                alert('Vui lòng điền đầy đủ thông tin!');
                return;
            }
            const contactData = {
                name: name,
                email: email,
                phone: phone,
                message: message
            };
            localStorage.setItem('contactFormData', JSON.stringify(contactData));
            alert('Lời nhắn của bạn đã được gửi cho chúng tôi');
            form.reset();
        });
    }
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
        const contactData = JSON.parse(savedData);
        const nameField = document.querySelector('input[placeholder="Your Name *"]');
        const emailField = document.querySelector('input[placeholder="Your Email *"]');
        const phoneField = document.querySelector('input[placeholder="Your Phone *"]');
        const messageField = document.querySelector('textarea[placeholder="Your Message"]');

        if (contactData.name && nameField) nameField.value = contactData.name;
        if (contactData.email && emailField) emailField.value = contactData.email;
        if (contactData.phone && phoneField) phoneField.value = contactData.phone;
        if (contactData.message && messageField) messageField.value = contactData.message;
    }
});
