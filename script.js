document.addEventListener('DOMContentLoaded', () => {
    const botoesProximo = document.querySelectorAll('.btn-proximo');
    const passos = document.querySelectorAll('.passo');

    botoesProximo.forEach(button => {
        button.addEventListener('click', (event) => {
            const proximoPassoId = event.target.dataset.proximo;
            mostrarPasso(proximoPassoId);
        });
    });

    function mostrarPasso(id) {
        passos.forEach(passo => {
            passo.classList.remove('ativo'); // Remove a classe 'ativo' de todos os passos
        });

        const passoAtivo = document.getElementById(`passo-${id}`);
        if (passoAtivo) {
            passoAtivo.classList.add('ativo'); // Adiciona a classe 'ativo' ao passo selecionado
        }
    }
});
