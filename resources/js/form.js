const docId = 'jLQsVfBqj4';
const tableIdOrName = 'grid-F4qsM_bt7P';
const token = '3974b4fb-0494-491e-b106-6d8689d287fc';
const url = `https://coda.io/apis/v1/docs/${docId}/tables/${tableIdOrName}/rows`;

const myForm = document.querySelector('#challenge-form');

const fullname = document.querySelector('#name');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const companyName = document.querySelector('#companyName');
const type = document.querySelector('#type');
const level = document.querySelector('#level');
const desc = document.querySelector('#description');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const fullnameValue = fullname.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const companyNameValue = companyName.value.trim();
    const typeValue = type.value.trim();
    const levelValue = level.value.trim();
    const descValue = desc.value.trim();
    let itsOkToFetch = true;

    if (fullnameValue === '') {
        itsOkToFetch = false;
        setErrorFor(fullname, 'پر کردن فیلد نام ضروری است');
    } else {
        setSuccessFor(fullname);
    }

    if (phoneValue === '') {
        itsOkToFetch = false;
        setErrorFor(phone, 'پر کردن فیلد تلفن ضروری است');
    } else {
        setSuccessFor(phone);
    }

    if (emailValue === '') {
        itsOkToFetch = false;
        setErrorFor(email, 'پر کردن فیلد ایمیل ضروری است');
    } else {
        setSuccessFor(email);
    }

    if (companyNameValue === '') {
        itsOkToFetch = false;
        setErrorFor(companyName, 'پر کردن فیلد ایمیل ضروری است');
    } else {
        setSuccessFor(companyName);
    }

    if (typeValue === '') {
        itsOkToFetch = false;
        setErrorFor(type, 'پر کردن فیلد ایمیل ضروری است');
    } else {
        setSuccessFor(type);
    }

    if (levelValue === '') {
        itsOkToFetch = false;
        setErrorFor(level, 'پر کردن فیلد ایمیل ضروری است');
    } else {
        setSuccessFor(level);
    }

    if (descValue === '') {
        itsOkToFetch = false;
        setErrorFor(desc, 'پر کردن فیلد ایمیل ضروری است');
    } else {
        setSuccessFor(desc);
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
                    {
                        'column': 'company',
                        'value': companyNameValue,
                    },
                    {
                        'column': 'type',
                        'value': typeValue,
                    },
                    {
                        'column': 'level',
                        'value': levelValue,
                    },
                    {
                        'column': 'desc',
                        'value': descValue,
                    },
                ],
            },
        ],
    };

    if (itsOkToFetch) {
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

}

function setErrorFor(input, message) {
    const fieldWrap = input.parentElement;
    console.log(fieldWrap);
    fieldWrap.classList.remove('challenge-form__field--success');
    fieldWrap.classList.add('challenge-form__field--error');
}

function setSuccessFor(input, message) {
    const fieldWrap = input.parentElement;
    fieldWrap.classList.remove('challenge-form__field--error');
    fieldWrap.classList.add('challenge-form__field--success');
}
