function handleFormSubmit(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.email.value;
    const phonenumber=event.target.phone.value;
    const obj={
        name,
        email,
        phonenumber
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));
    showUserOnScreen(obj);
    
}
function showUserOnScreen(obj){
    const parentElem = document.getElementById('listOfitems')
    const childElem = document.createElement('li')
    childElem.textContent=obj.name+'-'+obj.email+'-'+obj.phonenumber

    const deleteButton=document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.value = 'delete'
    deleteButton.onclick = () => {
        localStorage.removeItem(obj.email)
        parentElem.removeChild(childElem)
    }
    const editButton = document.createElement('input')
    editButton.type = 'button'
    editButton.value = 'Edit'

    editButton.onclick = () =>{
      localStorage.removeItem(obj.email)
      parentElem.removeChild(childElem)
      document.getElementById('username').value=obj.name;
      document.getElementById('email').value=obj.email;
      document.getElementById('phone').value=obj.phonenumber;
    }
    childElem.appendChild(deleteButton)
    childElem.appendChild(editButton)
    parentElem.appendChild(childElem)
}
