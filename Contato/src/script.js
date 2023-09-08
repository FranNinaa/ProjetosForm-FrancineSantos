   // javascript para a formatação da senha 
     // obs professor: peguei essa parte na internet só para fazer os 
        //filtros conforme descrito nos comentarios 
        //algo bem simples
     
        function togglePasswordVisibility() {
            var senhaInput = document.getElementById('idSenha');
            var senhaToggle = document.querySelector('.password-toggle');

            if (senhaInput.type === 'password') {
                senhaInput.type = 'text';
                senhaToggle.innerHTML = '&#128064;'; // Mostrar o ícone do olho fechado
            } else {
                senhaInput.type = 'password';
                senhaToggle.innerHTML = '&#128065;'; // Mostrar o ícone do olho aberto
            }
        }

        function validatePassword() {
            var senhaInput = document.getElementById('idSenha');
            var senhaValue = senhaInput.value;

            // Remover caracteres não numéricos
            senhaValue = senhaValue.replace(/[^0-9]/g, '');

            // Atualizar o valor do campo com os caracteres filtrados
            senhaInput.value = senhaValue;
        }
     
   
    