const docId = 'jLQsVfBqj4';
const tableIdOrName = 'grid-F4qsM_bt7P';
const token = '3974b4fb-0494-491e-b106-6d8689d287fc';
const url = `https://coda.io/apis/v1/docs/${docId}/tables/${tableIdOrName}/rows`;

const form = document.getElementById('challenge-form');
const fullname = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const fullnameValue = fullname.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();

    if (fullnameValue === '') {
        setErrorFor(fullname, 'پر کردن فیلد نام ضروری است');
    } else {
        setSuccessFor(fullname);
    }

    if (phoneValue === '') {
        setErrorFor(phone, 'پر کردن فیلد تلفن ضروری است');
    } else {
        setSuccessFor(phone);
    }

    if (emailValue === '') {
        setErrorFor(email, 'پر کردن فیلد ایمیل ضروری است');
    } else {
        setSuccessFor(email);
    }

    const data = {
        'rows': [
            {
                'cells': [
                    {
                        'column': 'name',
                        'value': fullnameValue,
                    },
                    {
                        'column': 'phone',
                        'value': phoneValue,
                    },
                    {
                        'column': 'email',
                        'value': emailValue,
                    },
                ],
            },
        ],
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success: ', data);
        // document.querySelector('.challenge-form__notif').classList.remove('challenge-form__notif--hidden');
    })
    .catch((error) => {
        console.error('Error: ', error);
    });

}

function setErrorFor(input, message) {
    const fieldWrap = input.parentElement;
    fieldWrap.classList.add('challenge-form__field--error');
}

function setSuccessFor(input, message) {
    const fieldWrap = input.parentElement;
    fieldWrap.classList.add('challenge-form__field--success');
}
