let user = document.getElementById('txtuser');
let senha = document.getElementById('txtsenha');
let erro = document.getElementById('txterro')

function logar(){
  if(user.value.length == 0 || senha.value.length == 0){
    erro.innerHTML = 'Preencha todos os campos para continuar'
  } else if (user.value == 'admin' && senha.value == 'admin'){
      window.alert("Bem vindo ademiro")
      erro.innerHTML = ''
      window.location = 'home.html'
      return
    } else {
      erro.innerHTML = 'Usuario ou senha Invalidos'
    }
  
  
}





