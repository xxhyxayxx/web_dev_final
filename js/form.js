/*
As for checking the form, I referred to the following site.
https://www.sejuku.net/blog/91384
https://www.webdesignleaves.com/pr/jquery/javascript-validation.html
 */

document.addEventListener('DOMContentLoaded',
    function () {
        const form = document.getElementById('form');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const comment = document.getElementById('comment');
        let nameV, emailV, commentV;

        //When the submit button is pressed
        form.addEventListener('submit', e => {
            e.preventDefault();
            validateInputs();
        });

        //Function for set error
        const setError = (element, message) => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');

            errorDisplay.innerText = message;
            inputControl.classList.add('error');
            inputControl.classList.remove('success')
        }

        //Function for set success
        const setSuccess = element => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');

            errorDisplay.innerText = '';
            inputControl.classList.add('success');
            inputControl.classList.remove('error');
        };

        //When the submit button is pressed, set default form design
        const setDefault = element => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');

            errorDisplay.innerText = '';
            inputControl.classList.remove('success');
            inputControl.classList.remove('error');
        };

        //Check email address is valid
        const isValidEmail = email => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        //Check inputs forms are valid
        const validateInputs = () => {
            const usernameValue = username.value.trim();
            const emailValue = email.value.trim();
            const commentValue = comment.value.trim();

            //username
            if (usernameValue === '') {
                setError(username, 'Name is required');
                nameV = false;
            } else {
                setSuccess(username);
                nameV = true;
            }

            //email
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

            //comment
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

        //Function for set modal
        function modal() {
            const easyModal = document.getElementById('easyModal');
            const buttonClose = document.getElementsByClassName('modalClose')[0];

            easyModal.style.display = 'block';

            //It will be closed when the close button is pressed
            buttonClose.addEventListener('click', modalClose);

            function modalClose() {
                easyModal.style.display = 'none';
            }

            //Clicking on a non-modal area will close the modal.
            addEventListener('click', outsideClose);

            function outsideClose(e) {
                if (e.target === easyModal) {
                    easyModal.style.display = 'none';
                }
            }
        }
    });