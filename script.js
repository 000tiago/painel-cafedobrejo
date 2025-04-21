    // Criando uma instância do IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        // Se o item estiver visível, adiciona a classe 'visible'
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Para de observar o item após ele ter sido visto
        }
        });
    }, {
        threshold: 0.2 // O item precisa estar 20% visível para disparar a animação
    });
    
    // Seleciona todos os itens que você quer animar
    const items = document.querySelectorAll('.item');
    
    // Observa cada item para ativar a animação quando entrar na tela
    items.forEach(item => {
        observer.observe(item);
    });

    document.getElementById('toggleBg').addEventListener('click', function () {
        const body = document.body;
        body.classList.toggle('bg-decorativo');
    
        this.textContent = body.classList.contains('bg-decorativo')
        ? 'Ocultar background'
        : 'Alterar plano de fundo';
    });
    