function cleanup(mainClass) {

    alert("Sua sugestão foi enviada com sucesso");

    // Select all inputs of main
    console.log(mainClass)
    var inputs = document.querySelectorAll(mainClass + " input");
    inputs.forEach(input => {
        input.value = "";
    })

}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.enviar').addEventListener('click', function() {
        const icone = document.getElementsByName("image-swap")[0];
        //icone.src = document.querySelector('.icone_da_sugestao img').value;
        localStorage.setItem('icone_da_sugestao', icone.src);
        const input_nome = document.querySelector('.nome_da_sugestao input').value;
        localStorage.setItem('nome_da_sugestao', input_nome); 
        console.log(input_nome);
        cleanup('main')
    });
})

function setImage(select){
    var image = document.getElementsByName("image-swap")[0];
    image.src = select.options[select.selectedIndex].value;
}  
