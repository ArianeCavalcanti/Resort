document.addEventListener('DOMContentLoaded', function () {
    // Evento ao clicar no botão de envio
    document.getElementById('enviarReserva').addEventListener('click', function (e) {
      e.preventDefault();
  
      // Coleta os dados do formulário
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const dataEntrada = document.getElementById('dataEntrada').value;
      const dataSaida = document.getElementById('dataSaida').value;
      const qtdAdultos = parseInt(document.getElementById('qtdAdultos').value || 0, 10);
      const qtdCriancas = parseInt(document.getElementById('qtdCriancas').value || 0, 10);
      const observacoes = document.getElementById('observacoes').value.trim();
  
      // Validação dos campos obrigatórios
      if (!nome || !email || !dataEntrada || !dataSaida || isNaN(qtdAdultos) || qtdAdultos <= 0) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
  
      // Cria o objeto de reserva
      const reserva = {
        nome,
        email,
        dataEntrada,
        dataSaida,
        qtdAdultos,
        qtdCriancas,
        observacoes
      };
  
      // Envia os dados para o JSON Server
      fetch('http://localhost:3000/reservas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reserva)
      })
        .then(response => {
          if (response.ok) {
            alert('Reserva enviada com sucesso!');
            document.getElementById('formularioReserva').reset();
          } else {
            alert('Erro ao enviar reserva.');
          }
        })
        .catch(error => console.error('Erro ao enviar reserva:', error));
    });
  });
  