document.addEventListener('DOMContentLoaded', function () {
    // JavaScript code to be executed after the DOM is fully loaded

    // Example: Add a click event listener to the menu button
    document.getElementById('click').addEventListener('click', function () {
        // Toggle the visibility of the navigation menu or add your custom logic
        var navigationMenu = document.querySelector('nav ul');
        if (navigationMenu) {
            navigationMenu.classList.toggle('visible');
        }
    });
});


var abtm = document.querySelector('#right2');
// abtm.innerHTML='hi';
// abtm.style.color='#fff';
var atm = document.querySelector('#abtm');
abtm.addEventListener("mouseover",function(){
    document.querySelector('#abtm').style.color='#fff';

})

var ctm = document.querySelector('#ctm');
ctm.addEventListener('mouserover',function(){
    ctm.style.
})