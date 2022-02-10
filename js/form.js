window.onload = function () {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const comment = document.getElementById('comment');
    let nameV, emailV, commentV;

    form.addEventListener('submit', e => {
        e.preventDefault();

        validateInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const setDefault = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.remove('success');
        inputControl.classList.remove('error');
    };

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateInputs = () => {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const commentValue = comment.value.trim();

        if (usernameValue === '') {
            setError(username, 'Name is required');
            nameV = false;
        } else {
            setSuccess(username);
            nameV = true;
        }

        if (emailValue === '') {
            setError(email, 'Email is required');
            emailV = false;
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
            emailV = false;
        } else {
            setSuccess(email);
            emailV = true;
        }

        if (commentValue === '') {
            setError(comment, 'Comment is required');
            commentV = false;
        } else {
            setSuccess(comment);
            commentV = true;
        }

        if (commentV && nameV && emailV) {
            document.getElementById("form").reset();
            setDefault(username);
            setDefault(comment);
            setDefault(email);
            modal();
        }

    };

    function modal() {
        const easyModal = document.getElementById('easyModal');
        const buttonClose = document.getElementsByClassName('modalClose')[0];

        easyModal.style.display = 'block';

        buttonClose.addEventListener('click', modalClose);
        function modalClose() {
            easyModal.style.display = 'none';
        }

        addEventListener('click', outsideClose);
        function outsideClose(e) {
            if (e.target === easyModal) {
                easyModal.style.display = 'none';
            }
        }
    }
};