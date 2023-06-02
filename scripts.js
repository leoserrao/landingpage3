document.getElementById('ebookForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Aqui você pode adicionar o código para enviar os dados do formulário para um servidor ou realizar outras ações necessárias.
  
    // Exemplo de exibição de mensagem de sucesso:
    var name = document.getElementById('nameInput').value;
    alert('Parabéns, ' + name + '! Seu e-book está a caminho.');
  });