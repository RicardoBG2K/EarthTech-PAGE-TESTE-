document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('myForm'); // Substitua 'myForm' pelo ID do seu formulário

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Aqui você pode realizar o envio dos dados do formulário para o servidor (via AJAX, por exemplo).

        // Exiba a mensagem de confirmação
        const confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.textContent = 'Seus dados foram enviados com sucesso para a empresa.';
        confirmationMessage.style.display = 'block';

        // Limpe os campos do formulário se necessário
        form.reset();
    });
});
