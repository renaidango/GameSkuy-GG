document.getElementById('ppl').addEventListener('click', function() {
    showImages(['image1', 'image2']);
});

document.getElementById('mlb').addEventListener('click', function() {
    showImages(['image3', 'image4', 'image5']);
});

document.getElementById('ffm').addEventListener('click', function() {
    showImages(['image6', 'image7']);
});

function showImages(imageIds) {
    var images = document.querySelectorAll('img');
    images.forEach(function(image) {
        image.classList.remove('show');
    });

    imageIds.forEach(function(imageId) {
        var selectedImage = document.getElementById(imageId);
        selectedImage.classList.add('show');
    });
}