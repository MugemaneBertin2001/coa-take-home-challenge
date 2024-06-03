window.onload = function() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.style.height = window.innerHeight + 'px';
    });
};