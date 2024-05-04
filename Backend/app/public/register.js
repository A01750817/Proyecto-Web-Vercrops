document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/api/register", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: e.target.elements.name.value,
            lastname: e.target.elements.lastname.value,
            email: e.target.elements.email.value,
            birthdate: e.target.elements.birthdate.value,
            CodigoPostal: e.target.elements.CodigoPostal.value,
            phone: e.target.elements.phone.value,
            role: e.target.elements.role.value,
            password: e.target.elements.password.value,
        })
    });
    if(!res.ok) return mensajeError.classList.toggle("escondido", false);
    const resJson = await res.json();
    // Si la respuesta de la API es exitosa, redirigimos al usuario a la página de inicio de sesión
    if(resJson.success){
        window.location.href = "/";
    }
})