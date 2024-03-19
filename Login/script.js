const mostrarSenha = () => 
{
    var inSenha = document.querySelector("#senha");

    if(inSenha.getAttribute("type") === "password")
    {
        inSenha.setAttribute("type", "text");
    }
    else
    {
        inSenha.setAttribute("type", "password");
    }
}

function login()
{
    var nome = $("#nome").val();
    var senha = $("#senha").val();
 
    if(nome && senha && nome === "admin" && senha === "12345")
    {
        const user = {
            name: nome,
            dataEntrada: new Date(),
            id: Math.floor(Math.random() * 100000)
        }
        localStorage.setItem("usuario", JSON.stringify(user));
        window.location.href = "../Loja/loja.html";
    }
    else
    {
        document.getElementById('error-modal').style.display = "flex";
    }
}