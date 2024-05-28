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
});







//nominal jasjok

document.addEventListener('DOMContentLoaded',function(){
    const paketPilihan = document.querySelectorAll('.paket');
    const paketRank = document.querySelectorAll('#paketrank');
    const pilihbintang = document.querySelector('.star-select');

    paketPilihan.forEach((paket, index) => {
        paket.addEventListener('click', function () {
            // Toggle the visibility of the corresponding check image
            pilihbintang.style.display = 'none';
            paketPilihan.forEach(paket =>{
                paket.style.border = 'solid #000000 1px';
            });
            this.style.border = 'solid #ffd900 1px';



            paketRank.forEach((item, i) => {
                if (i === index) {
                    if (item.style.display === 'none') {
                        item.style.display = 'block';
                    }
                    else {
                        item.style.display = 'block';
                    }
                } 
                
                else {
                    item.style.display = 'none';
                }
            });
        });
    });
});



document.addEventListener('DOMContentLoaded', function(){
    const pilihan = document.querySelector('.pilihan');
    const paketRankPilihan = document.querySelectorAll('.per-star1');
    const pilihbintang = document.querySelector('.star-select');


    paketRankPilihan.forEach((paketisian)=>{
        paketisian.addEventListener('click', function(){

           
            paketRankPilihan.forEach(paketisian =>{
                

                paketisian.style.border = 'solid #000000 1px'; 
                
            });
            this.style.border = 'solid #ffd900 1px';
            
            pilihbintang.style.display = 'block';
    

        });

    });


});

document.addEventListener('DOMContentLoaded', function(){

    const paketRankPilihan = document.querySelectorAll('.per-star');

    paketRankPilihan.forEach((paketisian)=>{
        paketisian.addEventListener('click', function(){

           
            paketRankPilihan.forEach(paketisian =>{
                

                paketisian.style.border = 'solid #000000 1px'; 
                
            });
            this.style.border = 'solid #ffd900 1px';
            
    

        });

    });

});
////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function() {
    const plusbutton = document.getElementById('plus');
    const minusbutton = document.getElementById('minus');
    const numberInput = document.getElementById('jumlahbintang');

    plusbutton.addEventListener('click', function() {
        numberInput.value = parseInt(numberInput.value) + 1;
    });
    minusbutton.addEventListener('click', function() {
        numberInput.value = parseInt(numberInput.value) - 1;
    });
});

