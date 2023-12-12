# Fokus
<h2>
  Descrição geral
</h2>
<p>
  Fokus é um projeto desenvolvido no curso "JavaScript: manipulando elementos no DOM" na Alura.
  No Fokus, você pode cadastrar e editar uma tarefa em que você queira focar e possui um temporizador para realizá-las.
  É utilizado o local storage para a persistência dos dados.
  Vale ressaltar que os estilos da página não foram feitos por mim, apenas a lógica do projeto.
</p>

<img src="https://github.com/Hekth/Fokus/assets/151862970/c940dfa6-6b33-4c51-a7f7-af96511d8c39" width="500px">

<h2>
  Principais tecnologias utilizadas
</h2>

<ul>
  <li>Javascript</li>
  <li>LocalStorage</li>
  <li>Manipulação do DOM</li>
</ul>

<h2>
  Principais funcionalidades
</h2>

<h3>
  Botões: Foco, Descanso curto e Descanso Longo
</h3>

<p>
  Ao clicá-los, eles alteram o texto, o fundo, a imagem e o valor do temporizador, bem como sua própria cor de fundo.
  Se clicar com o temporizador em execução, este é resetado.
  Se você estiver na aba de "Foco" com uma tarefa selecionada e o temporizador chegar a zero, a tarefa selecionada receberá uma estilização de "concluída".
  Também, chegando a zero, você receberá um alert indicando que o tempo acabou e um áudio semelhante a um despertador.
</p>

<h3>
  Botão de música
</h3>

<p>
  Ao clicar no botão de música, começará a tocar, em loop, uma música relaxante. Se você apertar novamente, a música pausará.
</p>

<h3>
  Botão de começar/pausar
</h3>

<p>
  Ele tem o objetivo de inicar ou pausar o temporizador. O texto e o ícone do botão também são alterados.
  Também toca um áudio referente a inicialização ou pausa do temporizador.
</p>

<h3>
  Texto "Em andamento"
</h3>
<p>
  Recebe o texto da tarefa que foi selecionada.
</p>

<h3>
  Lista de tarefas
</h3>
<p>
  Mostra todas as tarefas cadastradas, sendo possível selecioná-las, editá-las ou excluí-las.
</p>

<h3>
  Botão "Adicionar nova tarefa"
</h3>
<p>
  Exibe um campo de texto que permite o cadastro de novas tarefas. Também exibe 3 botões: "Deletar", "Cancelar" e "Salvar".
  O botão "Deletar", deletará a tarefa selecionada. Caso não tenha nenhuma tarefa selecionada, aparecerá um aviso.
  O botão "Cancelar" limpa o campo de texto e deixa de exibir o campo de cadastro de novas tarefas.
  O botão "Salvar" adiciona a tarefa digitada para a lista de tarefas. Também adiciona no localStorage, permitindo a persistência dos dados mesmo após sair do site.
  Se clicar novamente no botão "Adicionar nova tarefa", terá o mesmo efeito do botão "Cancelar".
</p>

<h2>
  <a src="https://fokus-hekth.vercel.app" target="_blank">LINK</a> para testar o projeto.
</h2>

<h2>
  Obrigado pela atenção!
</h2>
