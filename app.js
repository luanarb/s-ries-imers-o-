function pesquisar(){
    
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    

    if (!campoPesquisa) {
        section.innerHTML = "<p>Você não digitou a série</p>";
        return;
    }

        campoPesquisa = campoPesquisa.toLowerCase()
        
        let resultados = "";
        let titulo = "";
        let descricao = "";
        let tags = "";
        


        for (let dado of dados){
            titulo = dado.titulo.toLowerCase();
            descricao = dado.descricao.toLowerCase();
            tags = dado.tags.toLowerCase();
            

            if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
                //cria um novo elemento
                resultados += `
                <div class="item-resultado">
                        <div> 
                            <img src="${dado.imagem}" alt="${dado.titulo}"> 
                        </div>
                        <div>
                            <h2>
                                <a href="#" target="-blank">${dado.titulo}</a>
                            </h2>
                            <p class="descricao-meta">${dado.descricao} </p>
                            <p class="descricao-meta">${dado.genero}</p>
                            <p>Onde Assistir</p>
                            <a href="${dado.link}" target="_blank"> ${dado.site}</a>
                        </div>
                    `;
                    if (!resultados) {
                        resultados = "<p> Série não encontrada</p>"
                    }
                section.innerHTML = resultados;
            }
        }
    }



    