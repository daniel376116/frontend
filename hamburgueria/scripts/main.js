 // Seleciona o botão pelo ID que criamos no HTML
const botaoPedido = document.getElementById('btn-pedido');

// Adiciona um "ouvinte" de clique no botão
botaoPedido.addEventListener('click', function () {
  alert('🍔 Olá! Você será redirecionado para o atendimento da Delícia Express.');

  // 2. Abre o WhatsApp em uma nova aba
  window.open('https://wa.me/5524974001538', '_blank');
});
