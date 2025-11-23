
//caixa de noticias//


// Aguarda o carregamento completo do DOM antes de executar o código.
document.addEventListener("DOMContentLoaded", function() {

  // Seleciona todos os elementos que possuem as classes especificadas.
  const caixas = document.querySelectorAll(
    '.caixa-transparente3, .caixa-transparente4, .caixa-transparente5, .caixa-transparente6, .caixa-transparente7'
  );

  // Verifica se há elementos correspondentes no DOM.
  if (caixas.length) {
    
    // Cria uma instância do IntersectionObserver para monitorar a visibilidade dos elementos.
    const observer = new IntersectionObserver((entries, observer) => {
      
      // Para cada entrada observada (elementos monitorados pelo observer).
      entries.forEach(entry => {

        // Verifica se o elemento está visível no viewport.
        if (entry.isIntersecting) {

          // Adiciona a classe 'fade-in' ao elemento visível.
          entry.target.classList.add('fade-in');

          // Para de observar este elemento, pois já foi processado.
          observer.unobserve(entry.target);
        }
      });
    }, 
    // Configura o observer com uma margem de visibilidade de 20% (threshold: 0.2).
    { threshold: 0.2 });

    // Adiciona os elementos selecionados para serem observados pelo observer.
    caixas.forEach(caixa => observer.observe(caixa));
  }
});



//caixa de noticias//




//imagem//
// Aguarda o carregamento completo do DOM antes de executar o código.
document.addEventListener("DOMContentLoaded", function () {
  
  // Seleciona todos os elementos do DOM que possuem a classe 'itwas'.
  const imagens = document.querySelectorAll('.itwas');

  // Cria um novo IntersectionObserver para monitorar quando os elementos entram no viewport.
  const observer = new IntersectionObserver((entries) => {
    
    // Itera sobre cada entrada (elemento observado) retornada pelo observer.
    entries.forEach(entry => {
      
      // Verifica se o elemento atual está visível no viewport.
      if (entry.isIntersecting) {
        
        // Adiciona a classe 'fade-in' ao elemento para aplicar a animação.
        entry.target.classList.add('fade-in');
        
        // Para de observar este elemento, já que a animação foi aplicada.
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 }); // Configura o threshold para 10% de visibilidade antes de disparar o evento.

  // Adiciona cada elemento com a classe 'itwas' ao observer para monitoramento.
  imagens.forEach(img => observer.observe(img));
});
//imagem//

//curiosidades//

document.addEventListener("DOMContentLoaded", function() {
  const curiosidades = document.querySelectorAll('.curiosidade1, .curiosidade2, .curiosidade3, .curiosidade4, .curiosidade5, .curiosidade6');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  curiosidades.forEach(el => observer.observe(el));
});
//curiosidades//



//faq accordion//
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      if (answer && answer.classList.contains('faq-answer')) {
        answer.classList.toggle('show');
        this.classList.toggle('active');
      }
    });
  });
});
//faq accordion//

//formulario//



//caixa do formulario
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.formulario-container');
  const formulario = document.querySelector('.formulario');
  const formulario2 = document.querySelector('.formulario2');

  if (container && formulario && formulario2) {
    // Remove classes para garantir estado inicial
    formulario.classList.remove('esquerda');
    formulario2.classList.remove('direita');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          formulario.classList.add('esquerda');
          setTimeout(() => {
            formulario2.classList.add('direita');
          }, 200); // espera a animação da primeira terminar
          observer.unobserve(container);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(container);
  }
});
//caixa do formulario



//formulario de verdade//


// Aguarda o carregamento completo do DOM antes de executar o código.
document.addEventListener("DOMContentLoaded", function() {

  // Seleciona todos os elementos do DOM que possuem uma das classes especificadas.
  const caixas = document.querySelectorAll(
    '.caixa-transparente3, .caixa-transparente4, .caixa-transparente5, .caixa-transparente6, .caixa-transparente7'
  );

  // Verifica se há algum elemento selecionado (evita processar caso não haja).
  if (caixas.length) {
    
    // Cria um objeto IntersectionObserver para observar a visibilidade dos elementos selecionados.
    const observer = new IntersectionObserver((entries, observer) => {
      
      // Itera sobre as entradas do observer (um conjunto de elementos monitorados).
      entries.forEach(entry => {

        // Verifica se o elemento atual está visível (interseção com o viewport).
        if (entry.isIntersecting) {

          // Adiciona a classe 'fade-in' ao elemento visível para aplicar uma animação/estilo.
          entry.target.classList.add('fade-in');

          // Para de observar este elemento, pois ele já foi processado.
          observer.unobserve(entry.target);
        }
      });
    }, 
    // Configura o observer com uma margem de visibilidade de 20% do elemento.
    { threshold: 0.2 });

    // Associa o observer a cada elemento selecionado.
    caixas.forEach(caixa => observer.observe(caixa));
  }
});

// --- Lógica Principal de Votação (Reutilizável) ---

// 1. Defina a função que MANIPULA o envio do formulário primeiro.

function handleFormSubmit(event) {
    // Previne o comportamento padrão do formulário, que seria recarregar a página ao submeter.
    event.preventDefault();

    // `this` refere-se ao formulário onde o evento foi acionado.
    const form = this;

    // Obtém a opção selecionada no grupo de botões de rádio.
    const selectedOption = form.querySelector('input[type="radio"]:checked');

    // Seleciona a div onde os resultados serão exibidos.
    const resultsDiv = form.querySelector('.results-section');

    // Verifica se a div de resultados existe; se não, exibe um erro no console e para a execução.
    if (!resultsDiv) {
        console.error("Erro: A div de resultados '.results-section' não foi encontrada para o formulário atual. Verifique o HTML injetado.");
        return;
    }

    // Limpa qualquer conteúdo anterior na div de resultados.
    resultsDiv.innerHTML = '';

    // Se nenhuma opção foi selecionada, exibe uma mensagem de erro na div de resultados.
    if (!selectedOption) {
        resultsDiv.innerHTML = '<p class="error-message"><span style ="color: red;">Por favor, selecione uma opção para votar</span></p>';
    } else {
        // Obtém o título da opção selecionada a partir de um atributo personalizado.
        const optionTitle = selectedOption.getAttribute('data-option-title');

        // Cria o HTML para exibir os resultados.
        let resultsHtml = '<h2>Sua Escolha:</h2>';
        resultsHtml += `<ul><li><strong>${optionTitle}</strong></li></ul>`;
        resultsHtml += '<p>Obrigado por votar!</p>';

        // Insere o HTML criado na div de resultados.
        resultsDiv.innerHTML = resultsHtml;

        // Exibe no console qual opção foi votada.
        console.log('Opção votada:', optionTitle);
    }
}

// 2. Defina a função que INICIALIZA os formulários de votação.


function initializeVotingForm(formElement) {
    // Verifica se o elemento do formulário foi passado; caso contrário, exibe um aviso no console.
    if (!formElement) {
        console.warn("Nenhum elemento de formulário foi passado para initializeVotingForm.");
        return;
    }

    // Remove qualquer listener anterior para evitar duplicação de eventos.
    formElement.removeEventListener('submit', handleFormSubmit);

    // Adiciona o evento de submissão ao formulário.
    formElement.addEventListener('submit', handleFormSubmit);

    // Exibe no console que o evento foi anexado, mostrando o ID ou a tag do formulário.
    console.log("Evento de submit anexado ao formulário:", formElement.id || formElement.tagName);
}

// --- Função para Carregar Conteúdo Dinâmico ---

// 3. Defina a função que muda o conteúdo.
function changeContent(contentType) {
    // Seleciona a div onde o conteúdo será exibido.
    const contentDisplayDiv = document.getElementById('contentDisplayDiv');
    
   // Verifica se a div foi encontrada; caso contrário, exibe um erro no console.
    if (!contentDisplayDiv) {
        console.error("Erro: A div com ID 'contentDisplayDiv' não foi encontrada no HTML.");
        return;
    }

    // Inicializa uma variável para armazenar o HTML do conteúdo.
    let contentHTML = '';

    switch (contentType) {
        case 'filme':
           // HTML para o formulário de votação de filmes.
            contentHTML = `
                <div class="voting-container-inner">
                    <h3>Vote no melhor filme indicado ao Oscar!</h3>
                    <form id="movieVoteForm"> 
                        <div class="movie-options">
                            <label class="movie-card">
                                <input type="radio" name="filme-escolha" value="filme1" data-option-title="Ainda Estou Aqui">
                                <img src="/Imagem/aindaestouaqui.jpg" alt="Pôster de Ainda Estou Aqui">
                                <span>Ainda Estou Aqui</span>
                            </label>
                            <label class="movie-card">
                                <input type="radio" name="filme-escolha" value="filme2" data-option-title="Anora">
                                <img src="/Imagem/anora.jpg" alt="Pôster de Anora">
                                <span>Anora</span>
                            </label>
                            <label class="movie-card">
                                <input type="radio" name="filme-escolha" value="filme3" data-option-title="Emilia Pérez">
                                <img src="/Imagem/emiliaperez.jpg" alt="Pôster de Emilia Pérez">
                                <span>Emilia Pérez</span>
                            </label>
                            <label class="movie-card">
                                <input type="radio" name="filme-escolha" value="filme4" data-option-title="O Brutalista">
                                <img src="/Imagem/obrutalista.jpg" alt="Pôster de O Brutalista">
                                <span>O Brutalista: Ultimato</span>
                            </label>
                        </div>
                        <button type="submit">Votar</button>
                        <div class="results-section"></div> 
                    </form>
                </div>
            `;
            break;
        case 'atores':
           // HTML para o formulário de votação de atores.
            contentHTML = `
                <div class="voting-container-inner">
                    <h3>Vote no melhor Ator indicado ao Oscar!</h3>
                    <form id="atorVoteForm"> 
                        <div class="movie-options"> 
                            <label class="movie-card">
                                <input type="radio" name="ator-escolha" value="ator1" data-option-title="Adrien Brody">
                                <img src="/Imagem/andrien.jpg" alt="Foto de Tom Hanks">
                                <span>Adrien Brody <br> <span style="color: #FFD700">O Brutalista</span></span>
                            </label>
                            <label class="movie-card">
                                <input type="radio" name="ator-escolha" value="ator2" data-option-title="Timothée Chalamet">
                                <img src="/Imagem/timothe22.jpeg" alt="Foto de Timothée Chalamet">
                                <span>Timothée Chalamet <span style="color: #FFD700; font-size:11.5px">Um Completo Desconhecido</span></span>
                            </label>
                            <label class="movie-card">
                                <input type="radio" name="ator-escolha" value="ator3" data-option-title="Ralph Fiennes">
                                <img src="/Imagem/ralph.jpge.jpeg" alt="Foto de Ralph Fiennes">
                                  <span>Ralph Fiennes  <span style="color: #FFD700">Conclave</span></span>
                            </label>
                            <label class="movie-card">
                                <input type="radio" name="ator-escolha" value="ator4" data-option-title="Colman Domingo">
                                <img src="/Imagem/colman.jpeg" alt="Foto de Colman Domingo">
                                 <span>Colman Domingo  <span style="color: #FFD700">Sing Sing</span></span>
                            </label>
                        </div>
                        <button type="submit">Votar</button>
                        <div class="results-section"></div> 
                    </form>
                </div>
            `;
            break;
        case 'atrizes':
           // HTML para o formulário de votação de atrizes.
            contentHTML = `
                <div class="voting-container-inner">
                    <h3>Vote na melhor Atriz indicada ao Oscar!</h3>
                    <form id="atrizVoteForm"> 
                        <div class="movie-options"> 
                            <label class="movie-card">
                                <input type="radio" name="atriz-escolha" value="atriz1" data-option-title="Mikey Madison">
                                <img src="/Imagem/mikey.jpeg" alt="Foto de Mikey Madison">
                                 <span>Mikey Madison <br> <span style="color:  #FFD700">Anora</span></span>
                            </label>
                            <label class="movie-card">
                                <input type="radio" name="atriz-escolha" value="atriz2" data-option-title="Demi Moore ">
                                <img src="/Imagem/demi.jpeg" alt="Foto de Demi Moore ">
                               <span>Demi Moore  <br> <span style="color:  #FFD700">A Substância</span></span>
                            </label>
                            <label class="movie-card">
                                <input type="radio" name="atriz-escolha" value="atriz3" data-option-title="Cynthia Erivo">
                                <img src="/Imagem/cintia.jpeg" alt="Foto de Cynthia Erivo">
                               <span>Cynthia Erivo   <br> <span style="color:  #FFD700">Wicked</span></span>
                            </label>
                            <label class="movie-card">
                                <input type="radio" name="atriz-escolha" value="atriz4" data-option-title="Karla Sofía Gascón">
                                <img src="/Imagem/Karla.jpg" alt="Karla Sofía Gascón">
                                <span>Karla Sofía Gascón <br> <span style="color:  #FFD700">Emilia Pérez</span></span>
                            </label>
                        </div>
                        <button type="submit">Votar</button>
                        <div class="results-section"></div> 
                    </form>
                </div>
            `;
            break;
        default:
           // Mensagem padrão caso o tipo de conteúdo não seja reconhecido.
            contentHTML = '<p>Selecione uma das opções acima para ver o conteúdo.</p>';
    }

    // Insere o HTML correspondente na div de exibição.
    contentDisplayDiv.innerHTML = contentHTML;


    // Seleciona o formulário recém-inserido no DOM.
    const currentForm = contentDisplayDiv.querySelector('form');

     // Se o formulário existir, inicializa o evento de submissão.
    if (currentForm) {
        initializeVotingForm(currentForm);
    }
}

// --- Inicialização ao Carregar a Página ---
// Aguarda o carregamento completo do DOM para executar o código.
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os elementos com a classe 'texto1', que representam os itens do menu.
    const menuItems = document.querySelectorAll('.texto1');

    // Itera sobre cada item do menu.
    menuItems.forEach(item => {

        // Adiciona um evento de clique a cada item do menu.
        item.addEventListener('click', () => {

            // Remove a classe 'active' de todos os itens do menu.
            menuItems.forEach(el => el.classList.remove('active'));

            // Adiciona a classe 'active' ao item que foi clicado.
            item.classList.add('active');

            // Obtém o valor do atributo 'data-content' do item clicado e chama a função `changeContent`.
            changeContent(item.getAttribute('data-content'));
        });
    });

    // Se houver itens no menu, define o primeiro item como ativo e carrega seu conteúdo.
    if (menuItems.length > 0) {
        menuItems[0].classList.add('active'); // Marca o primeiro item do menu como ativo.
        changeContent(menuItems[0].getAttribute('data-content')); // Chama `changeContent` com o conteúdo associado ao primeiro item.
    }
});
//formulario de verdade//