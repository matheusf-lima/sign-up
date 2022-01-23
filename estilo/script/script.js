function logar() {
    event.preventDefault();
    var usuario = document.getElementById('txtuser')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('txtsenha')[0].value;
    senha = senha.toLowerCase();
  
    if (usuario == "admin" && senha == "admin") {
      alert("dados corretos");
      window.location = "home.html";
    }else{
      alert("Dados incorretos, tente novamente");
    }
  }


