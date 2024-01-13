$(document).ready(function () {
    // Obtenez le chemin de la page actuelle
    var currentPage = window.location.pathname;

    // Ajoutez une classe active à l'élément de la barre de navigation correspondant à la page actuelle
    $('#navbar-list a[href="' + currentPage + '"]').addClass('active');
});