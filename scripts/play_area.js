document.addEventListener('DOMContentLoaded', function() {
    data = document.querySelector('.data');
    dia = localStorage.getItem('playAreaDay')
    mes = localStorage.getItem('playAreaMonth')
    ano = localStorage.getItem('playAreaYear')

    if (dia != null && mes != null && ano != null) {
        data.innerHTML = `Dia ${dia} de ${mes.toLowerCase()} de ${ano}`
    }
})