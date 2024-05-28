document.addEventListener('DOMContentLoaded', (event) => {
    const preview = document.getElementById('preview');
    const bg1 = document.getElementById('riwayatnone');
    const bg2 = document.getElementById('riwayatblock');

    preview.addEventListener('click', function() {
        if (bg1.style.display === 'block') {
            bg1.style.display = 'none';
            bg2.style.display = 'block';
        } else {
            bg1.style.display = 'block';
            bg2.style.display = 'none';
        }
    });
});