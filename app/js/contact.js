
    const form = document.getElementById('form');
    const userName = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('submit')
        checkInputs();
        
    });

    function checkInputs() {
        const nameValue = userName.value.trim();
        const emailValue = email.value.trim();
        const subjectValue = subject.value.trim();
        const messageValue = message.value.trim();

        console.log(nameValue);

        if(nameValue === ''){
            setErrorFor(userName, "Name cannot be empty");
        }else{
            setSuccessFor(userName);
        }
        
        if(emailValue === ''){
            setErrorFor(email, "Email cannot be empty");
        }else if(!isEmail(emailValue)){
            setErrorFor(email, "Email is not valid");
        }
        else{
            setSuccessFor(email);
        }

        if(subjectValue === ''){
            setErrorFor(subject, "Subject cannot be empty");
        }else{
            setSuccessFor(subject);
        }

        if(messageValue === ''){
            setErrorFor(message, "Message cannot be empty");
        }else{
            setSuccessFor(message);
        }
        
    }


    function setErrorFor(input, message){
        const formGroup = input.parentElement;
        const msg = formGroup.querySelector('.msg');

        msg.innerText = message;

        formGroup.className = 'form-group error';
    }

    function setSuccessFor(input){
        const formGroup = input.parentElement;
        formGroup.className = 'form-group';
    }

    function isEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }