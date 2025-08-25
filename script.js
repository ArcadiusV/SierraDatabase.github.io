// Funzione per ingrandire l'immagine
function toggleImage(img) {
    const overlay = document.getElementById('image-overlay');
    const overlayImg = document.getElementById('overlay-img');

    // Se l'immagine è già nell'overlay, chiudiamola
    if (overlay.style.display === "flex") {
        overlay.style.display = "none";
    } else {
        overlay.style.display = "flex";
        overlayImg.src = img.src; // Imposta l'immagine nell'overlay
    }
}

// Funzione per chiudere l'overlay cliccando fuori dall'immagine
function closeImage() {
    const overlay = document.getElementById('image-overlay');
    overlay.style.display = "none";
}
