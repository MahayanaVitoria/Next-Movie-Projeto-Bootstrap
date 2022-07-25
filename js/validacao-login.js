const botao = document.querySelector("#send");
botao.addEventListener ("click", function(e) {

    e.preventDefault();

    const emailUsuario = document.querySelector("#email");

    const email = emailUsuario.value;

    const senhaUsuario = document.querySelector("#senha");

    const senha = senhaUsuario.value;

    if (email == "" || senha == "") {
        alert("Todos os campos devem ser preenchidos!")
    } else if (email == "usuario@gmail.com" && senha == "usuario123") {
        window.location.href = '../index.html';
    } else {
        alert("Email ou senha inválidos!")
    }

})