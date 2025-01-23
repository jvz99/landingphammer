function showBanner() {
    setTimeout(() => {
        const banner = document.getElementById('banner');
        banner.style.display = 'block'; // Mostra o banner
        setTimeout(() => {
            banner.style.opacity = 1; // Define a opacidade para 1
        }, 10); // Pequeno atraso
    }, 3000); // Atraso de 3000 milissegundos (3 segundos)
}


function closeBanner() {
    const banner = document.getElementById('banner');
    banner.style.opacity = 0; // Define a opacidade para 0
    setTimeout(() => {
        banner.style.display = 'none'; // Esconde o banner após a transição
    }, 500); // Tempo deve coincidir com a duração da transição
}

// Chama showBanner quando a página carrega
window.onload = showBanner;
