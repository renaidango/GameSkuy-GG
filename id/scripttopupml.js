// search container
document.getElementById('showSearchButton').addEventListener('click', function (event) {
    var searchContainer = document.getElementById('searchContainer');
    
    // Toggle class "anjae" untuk menampilkan atau menyembunyikan pencarian
    searchContainer.classList.toggle('anjae');
    
    if (!searchContainer.classList.contains('anjae')) {
        // Jika pencarian ditampilkan, tambahkan event listener untuk menangkap klik di luar elemen pencarian
        document.addEventListener('click', function closeSearchContainer(e) {
            if (!searchContainer.contains(e.target) && e.target.id !== 'showSearchButton') {
                searchContainer.classList.add('anjae');
                document.removeEventListener('click', closeSearchContainer);
            }
        });
    }
});




// cetak pemilihan nominal dan dm
document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('.nominal');
    const adminOptions = document.querySelectorAll('.method');
    const selectedNominal = document.getElementById('selected-nominal');
    const selectedDiamond = document.getElementById('selected-diamond');
    const selectedFee = document.getElementById('selected-fee');
    const totalElement = document.getElementById('totalharga');

    let currentNominal = 0;
    let currentFee = 0;
    

    console.log(options); // Untuk melihat apakah elemen .nominal ditemukan

    options.forEach(option => {
        option.addEventListener('click', function () {
            const nominal = parseInt(this.getAttribute('data-nominal'));
            const diamond = this.getAttribute('data-diamond');
            currentNominal = nominal;
            updateTotal();

            options.forEach(item => {
                item.style.border = 'solid #000000 1px';
            });
            this.style.border = 'solid #ffd900 1px';

            console.log('Element clicked'); // Untuk memastikan event listener bekerja
            console.log(`Nominal: ${nominal}, Diamond: ${diamond}`); // Untuk memastikan atribut data ada
            
            selectedNominal.textContent = `Rp.${nominal.toLocaleString()}`;
            selectedDiamond.textContent = `${diamond} Diamonds`;
        });
    });
    adminOptions.forEach(option => {
        option.addEventListener('click', function () {
            const fee = parseInt(this.getAttribute('data-fee'));
            const method = this.getAttribute('data-method');
            currentFee = fee;
            updateTotal();
            selectedFee.textContent = `+ Rp.${fee.toLocaleString()} ( Biaya Admin ${method})`;

            console.log(`Admin Fee: Rp ${fee}`); // Debugging line
        });
    });
    function updateTotal() {
        const total = currentNominal + currentFee;
        totalElement.textContent = `Rp.${total.toLocaleString()}`;
    }
});

//error message

document.addEventListener('DOMContentLoaded', function() {
    const idInput = document.getElementById('id');
    const serverInput = document.getElementById('server');
    const idErrorMessage = document.getElementById('errorMessage1');
    const serverErrorMessage = document.getElementById('errorMessage2');
    const form = document.getElementById('langkah1');
    const submitButton = document.getElementById('buybutton');

    function validateInput() {
        const isIdValid = idInput.value.length === 10;
        const isServerValid = serverInput.value.length === 5;

        idErrorMessage.style.display = isIdValid ? 'none' : 'block';
        serverErrorMessage.style.display = isServerValid ? 'none' : 'block';

        return isIdValid && isServerValid;
    }

    idInput.addEventListener('input', validateInput);
    idInput.addEventListener('blur', validateInput);

    serverInput.addEventListener('input', validateInput);
    serverInput.addEventListener('blur', validateInput);

    submitButton.addEventListener('click', function() {
        const isFormValid = validateInput();
        
        if (isFormValid) {
            form.submit();
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const idInput = document.getElementById('id');
    const errorMessage = document.getElementById('errorMessage');
    const form = document.getElementById('langkah1');
    const submitButton = document.getElementById('buybutton');

    function validateInput() {
        if (idInput.value.length !== 25) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
    }

    idInput.addEventListener('input', validateInput);
    idInput.addEventListener('blur', validateInput);

    submitButton.addEventListener('submit', function(event) {
        const isFormValid = validateInput();
        
        if (isFormValid) {
            form.submit();
        }
    });
});


//check pilihan metode pembayaran

document.addEventListener('DOMContentLoaded', function () {
    const methods = document.querySelectorAll('.method');
    const checks = document.querySelectorAll('.check');

    methods.forEach((method, index) => {
        method.addEventListener('click', function () {
            // Toggle the visibility of the corresponding check image
            checks.forEach((check, i) => {
                if (i === index) {
                    if (check.style.display === 'none') {
                        check.style.display = 'block';
                    }
                } else {
                    check.style.display = 'none';
                }
            });
        });
    });
});````````````````````````````````
