document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/api/register", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Nombre: e.target.elements.name.value,
            Apellido: e.target.elements.lastname.value,
            Correo: e.target.elements.email.value,
            FechaNacimiento: e.target.elements.birthdate.value,
            CodigoPostal: e.target.elements.CodigoPostal.value,
            Telefono: e.target.elements.phone.value,
            idTipo_Usuario: e.target.elements.role.value,
            Contrasena: e.target.elements.password.value,
        })
    });
    if(!res.ok) {
        mensajeError.classList.toggle("escondido", false);
    }
    const resJson = await res.json();
    // Redirigimos al usuario a la página de inicio de sesión
    window.location.href = "/";
})