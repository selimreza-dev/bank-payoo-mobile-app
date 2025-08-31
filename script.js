document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const savedMobileNumber = '01768873518';
        const savedPinNumber = '1122';

        // Get user mobile & pin number
        const userMobileNumber = document.getElementById('mobile-number').value;
        const userPinNumber = document.getElementById('pin').value;

        if (savedMobileNumber === userMobileNumber && savedPinNumber === userPinNumber) {
            window.location.href = './pages/home.html';
            // console.log('i am loggin')
            document.getElementById('mobile-number').value = '';

            document.getElementById('pin').value = '';
        } else {
            document.getElementById('mobile-number').style.borderStyle = 'solid';
            document.getElementById('mobile-number').style.borderWidth = '1px';
            document.getElementById('mobile-number').style.borderColor = 'red';
            document.getElementById('mobile-number').style.outline = 'none';



            document.getElementById('pin').style.borderStyle = 'solid';
            document.getElementById('pin').style.borderWidth = '1px';
            document.getElementById('pin').style.borderColor = 'red';
            document.getElementById('pin').style.outline = 'none';
        }

    })