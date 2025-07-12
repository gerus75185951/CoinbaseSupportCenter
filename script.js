// FAQ accordion functionality
document.querySelectorAll('.bg-white button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('i');

        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    });
});



function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}