// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const groceryInput = document.getElementById('grocery')
const submit = document.querySelector('.submit-btn')
const groceryContainer = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement;
let editFlag = false;
let editID ="";

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem)
// ****** FUNCTIONS **********

function addItem(e){
    e.preventDefault();
    const value = groceryInput.value;
    const id = new Date().getTime().toString();


    if(value !== '' && !editFlag){
        createItem(id,value)
        groceryContainer.classList.add('show-container')
        groceryInput.value=""
    }else if(value !== '' && editFlag){
        editItem(editID, editElement)
    }
}

function editItem(id, element){
    const value = groceryInput.value;
    if(value !==''){
       document.getElementById(id).querySelector('p').textContent = value
       editFlag=false;
       editElement="";
       editID="";
       groceryInput.value=''
    }
}

function deleteItem(id){
   const childs = list.children;
   for(let ele of childs){
     if(ele.id === id){
         list.removeChild(ele)
         editID="";
     }
   }
}

function createItem(id,value){
    const element = document.createElement('article');
        //add class
        element.classList.add('grocery-item');
        //add id
        const attr = document.createAttribute("data-id");
        attr.value = id;
        const idAttr = document.createAttribute("id");
        idAttr.value=id;
        element.setAttributeNode(attr);
        element.setAttributeNode(idAttr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>`
        list.appendChild(element)
        document.querySelectorAll('.grocery-item').forEach(item=>{
            if(item.dataset.id === id){
                item.querySelector('.edit-btn').addEventListener('click', ()=>{
                    groceryInput.value = item.querySelector('p').textContent
                    editFlag = true
                    editID = id;
                    editElement = item
                })
                item.querySelector('.delete-btn').addEventListener('click', ()=>{
                    console.log("deleting");
                    editID = id;
                    deleteItem(editID)
                })
            }
        })        
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
