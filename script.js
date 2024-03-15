    let contador = 0;
        const input = document.querySelector('input');
        const ul = document.querySelector('ul');

        // ADICIONAR ITEM
        function addItem(){
            let valor = input.value;
            if(valor !== "" && valor != null){
            ++contador;
2
            ul.innerHTML += `
            <li class="task" id="${contador}">
                <div onclick="checkItem(${contador})"><i class='bx bx-checkbox' id="icon_${contador}"></i></div>
                <p onclick="checkItem(${contador})">${valor}</p>
                <button onclick="deleteItem(${contador})"><i class='bx bxs-trash'></i></button>
            </li>
            `;

            input.value = "";
            }
        }

        // MARCAR ITEM
        function checkItem(id){
            let item = document.getElementById(id);
            let classe = item.getAttribute('class');
            let icon = document.getElementById('icon_'+ id);
            let valor = input.value;

            classe == 'task' ? item.classList.add('checked') + icon.classList.remove('bx-checkbox') + icon.classList.add('bx-checkbox-checked')
            : item.classList.remove('checked') + icon.classList.remove('bx-checkbox-checked') + icon.classList.add('bx-checkbox');
        }

        // DELETAR ITEM
        function deleteItem(id){
            let item = document.getElementById(id);
            item.remove();
        }

        // Salvar tarefa ao pressionar enter e focar o input dnv.
        // ao dar check a tarefa vai pro final.