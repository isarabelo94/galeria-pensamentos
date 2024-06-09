document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo-item');
    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            const link = photo.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });
});