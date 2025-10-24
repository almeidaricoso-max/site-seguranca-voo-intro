document.addEventListener('DOMContentLoaded', () => {
    // Rolagem suave para os links da navegação
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Ajuste para o header fixo de 70px
                    behavior: 'smooth'
                });
            }
        });
    });
});
