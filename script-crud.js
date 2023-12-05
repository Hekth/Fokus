const btAdicionarTarefa = document.querySelector('.app__button--add-task');
const formulario = document.querySelector('.app__form-add-task');
const textarea = document.querySelector('.app__form-textarea');
const ulTarefa = document.querySelector('.app__section-task-list');
const btCancelar = document.querySelector('.app__form-footer__button--cancel');
const paragrafoEmAndamento = document.querySelector('.app__section-active-task-description');
const btRemoverConcluidas = document.querySelector('#btn-remover-concluidas');
const btRemoverTodasTarefas = document.querySelector('#btn-remover-todas');
const btnDeletarTarefa = document.querySelector('.app__form-footer__button--delete');


let tarefas = JSON.parse(localStorage.getItem('tarefa')) || [];
let tarefaAtiva = null;
window.addEventListener('load', adicionaLista);

function listaTarefa(tarefa) {
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    li.addEventListener('click', () => {
        if (li.classList.contains('app__section-task-list-item-active')) {
            paragrafoEmAndamento.innerText = '';
            li.classList.remove('app__section-task-list-item-active');
            return;
        }

        tarefaAtiva = tarefa;
        paragrafoEmAndamento.innerText = tarefa.descricao;
        const tarefaSelecionada = document.querySelector('.app__section-task-list-item-active') || null;
        if (tarefaSelecionada) {
            tarefaSelecionada.classList.remove('app__section-task-list-item-active');
            tarefaAtiva = null;
        }
        li.classList.add('app__section-task-list-item-active');
    });

    const svg = document.createElement('svg');
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
        <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path> </svg>
    `
    const p = document.createElement('p');
    p.classList.add('app__section-task-list-item-description');
    p.innerText = tarefa.descricao;

    const button = document.createElement('button');
    button.classList.add('app_button-edit');

    button.onclick = () => {
        //debugger
        const novoTexto = prompt('Qual o novo nome da tarefa?');
        if (novoTexto) {
            p.innerText = novoTexto;
            tarefa.descricao = novoTexto;
            localStorage.setItem('tarefa', JSON.stringify(tarefas));
        }
    }

    const img = document.createElement('img');
    img.setAttribute('src', '/imagens/edit.png');

    button.append(img);

    li.append(svg);
    li.append(p);
    li.append(button);

    if (tarefa.completa) {
        li.classList.add('app__section-task-list-item-complete');
        button.disabled = true;
    }

    return li;
}

btAdicionarTarefa.addEventListener('click', () => {
    formulario.classList.toggle('hidden');
});

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tarefa = {
        descricao: textarea.value,
    };

    tarefas.push(tarefa);

    localStorage.setItem('tarefa', JSON.stringify(tarefas));
    ulTarefa.innerText = '';
    adicionaLista();
    textarea.value = '';
    formulario.classList.add('hidden');
});

function adicionaLista() {
    tarefas.forEach((e) => {
        ulTarefa.append(listaTarefa(e));
    });
}

function cancelarTarefa() {
    textarea.value = '';
    formulario.classList.add('hidden');
}

btCancelar.addEventListener('click', cancelarTarefa);

document.addEventListener('FocoFinalizado', () => {
    const tarefaSelecionada = document.querySelector('.app__section-task-list-item-active') || null;
    if (tarefaSelecionada) {
        tarefaSelecionada.classList.remove('app__section-task-list-item-active');
        tarefaSelecionada.classList.add('app__section-task-list-item-complete');
        tarefaSelecionada.querySelector('button').disabled = true;
        tarefaAtiva.completa = true;
        localStorage.setItem('tarefa', JSON.stringify(tarefas));
    }
});

btRemoverConcluidas.addEventListener('click', () => {
    const tarefasConcluidas = document.querySelectorAll('.app__section-task-list-item-complete');
    paragrafoEmAndamento.innerText = '';
    tarefasConcluidas.forEach((e) => e.remove());
    tarefas = tarefas.filter((e) => !e.completa);
    localStorage.setItem('tarefa', JSON.stringify(tarefas));
    tarefaAtiva = null;
});

btRemoverTodasTarefas.addEventListener('click', () => {
    const todasTarefas = document.querySelectorAll('.app__section-task-list-item');
    paragrafoEmAndamento.innerText = '';
    todasTarefas.forEach((e) => e.remove());
    localStorage.clear();
    tarefas = [];
    tarefaAtiva = null;
});

btnDeletarTarefa.addEventListener('click', () => {
    if (!tarefaAtiva) return alert('Você precisa selecionar uma tarefa para deletá-la.');
    paragrafoEmAndamento.innerText = '';
    const tarefaSelecionada = document.querySelector('.app__section-task-list-item-active');
    tarefaSelecionada.remove();
    tarefas = tarefas.filter((e) => e !== tarefaAtiva);
    localStorage.setItem('tarefa', JSON.stringify(tarefas));
});