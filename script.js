function toggleBackground() {
    let video = document.getElementById('bgVideo');
    if (video.style.display === 'none') {
        video.style.display = 'block';
    } else {
        video.style.display = 'none';
    }
}