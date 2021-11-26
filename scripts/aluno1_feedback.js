function cleanup(mainClass) {

    alert("Seu formulário foi enviado com sucesso");

    // Select all inputs of main
    console.log(mainClass)
    var inputs = document.querySelectorAll(mainClass + " input");
    inputs.forEach(input => {
        input.value = "";
    })

}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.enviar').addEventListener('click', function() {
        cleanup('main')
    });
})