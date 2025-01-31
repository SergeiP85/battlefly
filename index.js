function toggleMobileMenu(event) {
    event.preventDefault(); // предотвращает переход по ссылке
    
    const menu = document.getElementById("menu");
    const icon = document.querySelector('.burger-icon');

    menu.classList.toggle("active");
    icon.classList.toggle("rotated");
}






