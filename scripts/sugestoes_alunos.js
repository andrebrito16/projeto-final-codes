document.addEventListener('DOMContentLoaded', function() {
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
});