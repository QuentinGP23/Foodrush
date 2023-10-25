document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez l'élément à l'aide de JavaScript
    const heartIcon = document.querySelector('.clickableheart');

    // Ajoutez un gestionnaire d'événement au clic sur l'icône
    heartIcon.addEventListener('click', function() {
        // Vérifiez la classe actuelle
        if (heartIcon.classList.contains('fa-regular')) {
            // Si la classe actuelle est "fa-regular", la change en "fa-solid"
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
        } else {
            // Sinon, la change en "fa-regular"
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
        }
    });
});