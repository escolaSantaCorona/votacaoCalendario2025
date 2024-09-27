const submitButton = document.getElementById('submit');
const form = document.getElementById('sheetdb-form');

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Desativar o botão de enviar
    submitButton.disabled = true;

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
        });
        const result = await response.json();

        // Se o envio for bem-sucedido
        alert('FORMUÁRIO ENVIADO COM SUCESSO!!!');
        form.reset();
    } catch (error) {
        // Se houver um erro na requisição
        alert('Houve um erro ao enviar o formulário. Tente novamente.');
    } finally {
        // Reativar o botão após a conclusão, independentemente do sucesso ou falha
        submitButton.disabled = false;
    }
});
