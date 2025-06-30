const form = document.getElementById('meuFormulario');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Validar o campo nome (exemplo)
      const nomeInput = document.getElementById('nome');
      if (nomeInput.value.trim() === '') {
        alert('O campo nome é obrigatório.');
        return;
      }
  
      // Enviar os dados
      fetch(form.action, {
        method: form.method,
        body: new FormData(form)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Formulário enviado com sucesso!');
      })
      .catch(error => {
        console.error(error);
        alert('Erro ao enviar o formulário.');
      });
    });