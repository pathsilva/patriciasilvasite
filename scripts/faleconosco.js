
function enviar() {
    var formulario = {
        Nome: "",
        Sobrenome: "",
        aniversario: "",
        genero: "",
        telefone: "",
        email: ""
    };
    formulario.Nome = document.getElementById("Nome").value;
    formulario.Sobrenome = document.getElementById("Sobrenome").value;
    formulario.aniversario = document.getElementById("aniversario").value;
    formulario.genero = document.getElementById("genero").value;
    formulario.telefone = document.getElementById("telefone").value;
    formulario.email = document.getElementById("email").value;
    document.getElementById("nomeCad").innerHTML = formulario.Nome;
    document.getElementById("sobrenomeCad").innerHTML = formulario.Sobrenome;
    document.getElementById("nascimentoCad").innerHTML = formulario.aniversario;
    document.getElementById("genero1").innerHTML = formulario.genero;
    document.getElementById("telefone1").innerHTML = formulario.telefone;
    document.getElementById("email1").innerHTML = formulario.email;

    document.getElementById("frmcadastro");
} 

