//Função para validação e login

let user = document.getElementById('txtuser');
let senha = document.getElementById('txtsenha');
let erro = document.getElementById('txterro')
let loginform = document.getElementById('formlogin')


function logar(){
  if(loginform.reportValidity()){
    const consultar = readClient()
    if(user.value == consultar.nome) {
      erro.innerHTML = 'achei o boi'
    }
  } else [
    erro.innerHTML = 'fail'
  ]
}
// --------------------------------------------------

//Função para pegar os itens e voltar pro login
let novouser = document.getElementById('txtnovouser')
let novasenha = document.getElementById('txtnovasenha')
let confirmsenha = document.getElementById('txtconfirmsenha')
let form = document.getElementById('formsign')

const isvalidFilds = () => {
  if(form.reportValidity() && novasenha.value == confirmsenha.value) {
    return true
  } else if(novasenha.value != confirmsenha.value) {
    erro.innerHTML = 'As senhas são diferentes!'
    return false
  } 
    //retorna true se todos os campos estiverem preenchidos e as senhas iguais
}


const saveClient = () => {
  if (isvalidFilds()) {
    const clinet = {
      nome: novouser.value,
      senha: novasenha.value
    }
    createClient(clinet)
    window.location = 'index.html'
    erro.innerText = 'Cadastrado com sucesso!'
  }
}



//crud no localstorage

const tempClient = {
  nome: "Lucas",
  senha: "novasenha"
} 

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_usuario')) ?? []

const setLocalStorage = (dbClient) => localStorage.setItem('db_usuario',JSON.stringify(dbClient))


//create
const createClient = (client) => {
  const dbClient = getLocalStorage()
  dbClient.push(client)
  setLocalStorage(dbClient)
}

//read
const readClient = () => getLocalStorage()

//update
const updateClient = (index, client) => {
  const dbClient = readClient()
  dbClient[index] = client
  setLocalStorage(dbClient)
}

//delete

const deleteClient = (index) => {
  const dbClient = readClient()
  dbClient.splice(index, 1)
  setLocalStorage(dbClient)
}

