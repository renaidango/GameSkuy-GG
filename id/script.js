









let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let autoSlideTimeout;
const autoSlideInterval = 3000;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
    resetAutoSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
    resetAutoSlide();
}
function autoSlide() {
    nextSlide();
    autoSlideTimeout = setTimeout(autoSlide, autoSlideInterval);
}

function resetAutoSlide() {
    clearTimeout(autoSlideTimeout);
    autoSlideTimeout = setTimeout(autoSlide, autoSlideInterval);
}

// Memulai auto-slide


// Tambahkan event listener untuk tombol next dan prev
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    autoSlide();
    document.querySelector('.next-btn').addEventListener('click', nextSlide);
    document.querySelector('.prev-btn').addEventListener('click', prevSlide);
});







// search container

document.getElementById('showSearchButton').addEventListener('click', function (event) {
    var searchContainer = document.getElementById('searchContainer');
    const searchmenu = document.getElementById('searchmenu');
    
    // Toggle class "hidden" untuk menampilkan atau menyembunyikan pencarian
    searchContainer.classList.toggle('anjae');
    if(searchmenu.style.display === 'block'){
        searchmenu.style.display = 'none';
    }
    else{
        searchmenu.style.display = 'block';
    }
    
    if (!searchContainer.classList.contains('anjae')) {
        // Jika pencarian ditampilkan, tambahkan event listener untuk menangkap klik di luar elemen pencarian
        document.addEventListener('click', function closeSearchContainer(e) {
            if (!searchContainer.contains(e.target) && e.target.id !== 'showSearchButton') {
                searchContainer.classList.add('anjae');
                document.removeEventListener('click', closeSearchContainer);
                searchmenu.style.display = 'none';
            }
            
        });
    }
});


document.addEventListener('DOMContentLoaded', (event)=>{
    const searchMenu = document.getElementById('searchmenu');
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('srch');

    const images = [
        {src: 'menupilihan1.png', keywords: ['mobile legends', 'ml', 'topup']},
        {src: 'menupilihan2.png', keywords: ['free fire', 'ff', 'topup']},
        {src: 'menupilihan3.png', keywords: ['mobile legends', 'ml','jasa joki', 'jasjok', 'joki', 'joki rank', 'rank']},
        {src: 'menupilihan4.png', keywords: ['mobile legends', 'ml', 'mabar', 'mabar', 'jasa mabar', 'jasa main bareng']}
    ];
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        searchMenu.innerHTML = ''; // Clear previous results

        const filteredImages = images.filter(image => {
            return image.keywords.some(keyword => keyword.includes(query));
        });

        if (filteredImages.length > 0) {
            searchMenu.style.display = 'flex';
            filteredImages.forEach(image => {
                const img = document.createElement('img');
                img.src = image.src;
                img.style.display = 'inline-block';
                img.style.width = 'auto';
                img.style.height = '6cm'; // Sesuaikan tinggi gambar sesuai kebutuhan Anda
                img.style.marginRight = '10px';
                searchMenu.appendChild(img);
            });
        } else {
            searchMenu.style.display = 'none';
        }
    });


    
});









//menupilihan
// JavaScript untuk mengontrol tampilan gambar
document.getElementById('ppl').addEventListener('click', function() {
    showImages(['image1', 'image2']);
});

document.getElementById('mlb').addEventListener('click', function() {
    showImages(['image3', 'image4', 'image5']);
});

document.getElementById('ffm').addEventListener('click', function() {
    showImages(['image7']);
});

function showImages(imageIds) {
    var images = document.querySelectorAll('img');
    images.forEach(function(image) {
        image.classList.remove('show'),image.classList.remove('mainimg');
    });

    imageIds.forEach(function(imageId) {
        var selectedImage = document.getElementById(imageId);
        selectedImage.classList.add('show'),selectedImage.classList.add('show');
    });
}



myInput.oninput = function () {
    if (this.value.length > 4) {
        this.value = this.value.slice(0,4); 
    }
}



//cetak pemilihan

document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('.nominal');
    const selectedNominal = document.getElementById('selected-nominal');
    const selectedDiamond = document.getElementById('selected-diamond');

    options.forEach(option => {
        option.addEventListener('click', function () {
            const nominal = this.getAttribute('data-nominal');
            const diamond = this.getAttribute('data-diamond');
            selectedNominal.textContent = `Rp ${parseInt(nominal).toLocaleString()}`;
            selectedDiamond.textContent = `${diamond} Diamond`;
        });
    });
});
