document.addEventListener('DOMContentLoaded', function() {
    nome_da_sugestao_novo = document.querySelector('.sugestao_inserida p');
    nome_da_sugestao_novo.innerHTML = localStorage.getItem('nome_da_sugestao');
    icone_da_sugestao_novo = document.querySelector('.sugestao_inserida img');
    icone_da_sugestao_novo.src = localStorage.getItem('icone_da_sugestao');

    var heart = document.querySelectorAll('.coracao');
    for (var i = 0; i < heart.length; i++) {
        // if heart src is heart.png, then set heart src to red_heart.png if not, set to heart.png
        heart[i].addEventListener('click', function() {
            if (this.src.match('images/icons/heart.png')) {
                this.src = 'images/icons/red_heart.png';
            } else {
                this.src = 'images/icons/heart.png';
            }
        });
    }
})

