window.addEventListener('load', () =>{

    const form = document.querySelector("#form-listas");
    const input = document.querySelector("#input-lista");
    const lista_el = document.querySelector(".tarefas");

    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const tarefa = input.value;

        if(!tarefa){
            alert("Por favor, preencha com alguma tarefa");
            return;
        }

        const tarefa_el = document.createElement('div');
        tarefa_el.classList.add('tarefa');

        const conteudo_tarefa_el = document.createElement('div');
        conteudo_tarefa_el.classList.add('conteudo');

        tarefa_el.appendChild(conteudo_tarefa_el);

        const tarefa_input_el = document.createElement('input');
        tarefa_input_el.classList.add('texto');
        tarefa_input_el.type = "text";
        tarefa_input_el.value = tarefa;
        tarefa_input_el.setAttribute("readonly", "readonly");

        conteudo_tarefa_el.appendChild(tarefa_input_el);

        const acoes_tarefa_el = document.createElement('div');
        acoes_tarefa_el.classList.add('acoes');

        const editar_tarefa_el = document.createElement('button');
        editar_tarefa_el.classList.add('editar');
        editar_tarefa_el.innerHTML = "Editar";


        const deletar_tarefa_el = document.createElement('button');
        deletar_tarefa_el.classList.add('deletar');
        deletar_tarefa_el.innerHTML = "Deletar";

        acoes_tarefa_el.appendChild(editar_tarefa_el);
        acoes_tarefa_el.appendChild(deletar_tarefa_el);

        tarefa_el.appendChild(acoes_tarefa_el);

        lista_el.appendChild(tarefa_el);

        input.value = "";

        editar_tarefa_el.addEventListener('click', () =>{
            if(editar_tarefa_el.innerHTML.toLowerCase() == "editar"){
                tarefa_input_el.removeAttribute("readonly");
                tarefa_input_el.focus();
                editar_tarefa_el.innerHTML = "Salvar"
            } else{
                tarefa_input_el.setAttribute("readonly", "readonly")
                editar_tarefa_el.innerHTML = "Editar"
            }
        });

        deletar_tarefa_el.addEventListener("click", () =>{
            lista_el.removeChild(tarefa_el);
        });
    })
})