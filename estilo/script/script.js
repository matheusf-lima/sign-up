//Função para validação e login

let user = document.getElementById('txtuser');
let senha = document.getElementById('txtsenha');
let erro = document.getElementById('txterro')
let loginform = document.getElementById('formlogin')


function logar(){
  if(loginform.reportValidity()){
    window.location = 'home.html'
  }
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

const tableuser = document.getElementById('tbody')

const createRow = (client, index) => {
  const newRow = document.createElement('tr')
  newRow.innerHTML = 
    `<td class="colunanome"> ${client.nome}</td>
     <td> ${client.senha}</td>
     <td class="colunaacao"class><input class="edit"type="button" value="Edit" id="edit-${index}"> <input type="button" value="Del" class="del" id="del-${index}"></td>`
  tableuser.appendChild(newRow)
}

const clearTable = () =>{
  tableuser.innerHTML = ''
}

const updateTable = () => {
  clearTable()
  const dbClient = readClient()
  dbClient.forEach(createRow)
}

updateTable()

const fillFilds = (client) => {
  novouser.value = client.nome
  novasenha.value = client.senha
}

const editClient = (index)=> {
  const client = readClient()[index]
  fillFilds(client)
  window.location = 'cadastro.html'

}

const editDelete  = (event) => {
  if(event.target.type == 'button'){
    const [action, index] = event.target.id.split('-')
    if(action == 'edit'){
      editClient(index)
      
    }
  }
}

document.getElementById('table').addEventListener('click', editDelete)
