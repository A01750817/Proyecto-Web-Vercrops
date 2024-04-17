function delay(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}


async function loadLog() {
    const main_container_2 = document.querySelector('.main_container_2');
    main_container_2.classList.add('fade-out');
    await delay(500); // Adjust the delay to match transition duration
    window.location.href = 'LogIn.html';
}

async function loadSign() {
    const main_container_2 = document.querySelector('.main_container_2');
    main_container_2.classList.add('fade-out');
    await delay(500); // Adjust the delay to match transition duration
    window.location.href = 'SignUp.html'; // Redirect to Page 2 after animation
}
