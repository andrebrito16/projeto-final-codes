document.addEventListener('DOMContentLoaded', function() {
    data = document.querySelector('.data');
    dia = localStorage.getItem('playAreaDay')
    mes = localStorage.getItem('playAreaMonth')
    ano = localStorage.getItem('playAreaYear')

    if (dia != null && mes != null && ano != null) {
        data.innerHTML = `Dia ${dia} de ${mes.toLowerCase()} de ${ano}`
    }
})
function cleanup(mainClass) {

    alert("Seu evento foi criado com sucesso");

    // Select all inputs of main
    console.log(mainClass)
    var inputs = document.querySelectorAll(mainClass + " input");
    inputs.forEach(input => {
        input.value = "";
    })

}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.marcar_atividade').addEventListener('click', function() {
        cleanup('main')
    });
})