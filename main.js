$(document).ready(function(){
    $('#inserir').click(function(){                                      
        $('#lista-tarefas').slideDown()
    })

    $('#reset').click(function(){
        $('#lista-tarefas').slideUp()
    })

    $('form').on('submit', function(e){                                          
        e.preventDefault()
            const tarefa = $('#listagem').val()         
            const novoItem = $(`<input type="checkbox" id="tarefas"/> <label for="tarefas"></label>`)
    $(`<label>${tarefa}</label></br>`).appendTo(novoItem)

        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)                        
        $('#listagem').val('')                          
    })
})

