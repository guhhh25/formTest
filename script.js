let selectedRow = null
let savedPeople = []
let selectPeople = 0
const errorMsg = document.querySelector('.errorMessage')
const msgError = document.querySelector('.messageError')
const sucess = document.querySelector('.sucessMessage')
const sucessMsg = document.querySelector('.sucessMessagep')
const inputRequired1 = document.querySelector('.inputRequired1')
const inputRequired2 = document.querySelector('.inputRequired2')
const inputRequired3 = document.querySelector('.inputRequired3')
const inputRequired4 = document.querySelector('.inputRequired4')
const inputRequired5 = document.querySelector('.inputRequired5')




const btn = document.querySelector('.btn-4').addEventListener('click', () =>{
        var formData = readFormData()
        savedPeople.push(formData) 
        if(inputRequired1.value === '' || inputRequired2.value === '' || inputRequired3.value === '' || inputRequired4.value === '' || inputRequired5.value === ''){
          errorMsg.style.display = 'block'
          msgError.innerHTML = 'Preencha todos os campos!'
          setInterval(() =>{
            errorMsg.style.display = 'none'
          },2500)
          return false
        }
        
        if(savedPeople.length > 3){
          savedPeople.pop()
          errorMsg.style.display = 'block'
          msgError.innerHTML = 'Apenas 3 candidatos são permitidos por vaga!'
          setInterval(() =>{
            errorMsg.style.display = 'none'
          },2500)
          return false
        }
        const user = document.querySelector('#usersNumber').innerText = `Candidatos salvos: ${savedPeople.length}`

        selectPeople += 1


        resetForm();  
  })

  const btnSave = document.querySelector('.btn-5').addEventListener('click', () =>{
      if(savedPeople.length >= 1 && selectPeople <= 3){
        insertNewRecord(savedPeople)
        sucess.style.display = 'block'
        sucessMsg.innerHTML = "Os usuarios foram salvos!"
        setInterval(() =>{
          sucess.style.display = 'none'
       
        },2500)
        
        const user = document.querySelector('#usersNumber').innerText = `Candidatos salvos: 0`
       
        savedPeople = []
      }else{
        errorMsg.style.display = 'block'
        msgError.innerHTML = `<br>Nenhum usuario foi salvo</br>
                              <br> Possiveis motivos =></br> 
                              <br>Esta vaga só permite 3 candidatos</br>
                              <br>Voce não salvou nenhum usuario</br>`
        setInterval(() =>{
          errorMsg.style.display = 'none'
        },2500)
        return false
      }
    })

function resetForm(){
    document.getElementById("Name").value = ''
    document.getElementById("Surname").value = ''
    document.getElementById("CPF").value = '',
    document.getElementById("Date").value = ''
    document.getElementById("Job").value = ''
}


function readFormData() {
    let date = new Date
    let year = date.getFullYear()
    let formData = {};
    formData["name"] = document.getElementById("Name").value;
    formData["surname"] = document.getElementById("Surname").value;
    formData["cpf"] = document.getElementById("CPF").value;
    formData["date"] = document.getElementById("Date").value;
    formData["job"] = document.getElementById("Job").value;
    formData["age"] = parseInt(year) - parseInt(formData["date"]) 
    formData["older"] = formData["age"] > 18 ? "Maior" : "Menor"


    return formData;
}


function insertNewRecord(data) {
    savedPeople.map((items) =>{
    let table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = items.name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = items.surname;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = items.cpf;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = items.date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = items.job   
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = items.age
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = items.older
    })  

    
}

