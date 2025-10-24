document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DA TELA DE ABERTURA (SPLASH SCREEN) ---
    const splashScreen = document.getElementById('splash-screen');
    const introVideo = document.getElementById('intro-video');

    // Verifica se os elementos existem antes de adicionar listeners
    if (splashScreen && introVideo) {
        // Tenta tocar o vídeo assim que possível
        introVideo.play().catch(error => {
            console.error("Erro ao tentar tocar o vídeo automaticamente:", error);
            // Se o autoplay falhar, esconde a splash screen imediatamente
            splashScreen.classList.add('hidden');
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 800); // Mesmo tempo da transição CSS
        });

        // Quando o vídeo terminar de tocar...
        introVideo.addEventListener('ended', () => {
            // Adiciona a classe para iniciar o efeito de fade-out
            splashScreen.classList.add('hidden');

            // Depois que o fade-out terminar, remove a tela de abertura
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 800); // Tempo da transição CSS (0.8s = 800ms)
        });

    } else {
        // Se algum elemento não for encontrado, esconde a splash screen imediatamente
        if (splashScreen) {
             splashScreen.style.display = 'none';
        }
        console.error("Elemento splash-screen ou intro-video não encontrado.");
    }
}); // Fim do DOMContentLoaded
