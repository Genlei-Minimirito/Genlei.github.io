function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
    });

    // Mobile menu toggle
    function toggleMenu() {
        var dropdownMenu = document.getElementById('dropdownMenu');
        dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
    }
});
