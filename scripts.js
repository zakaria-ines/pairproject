var inputs = []
var submit = document.createElement('input')
submit.type = 'submit'
submit.id ='add'
submit.value ='add'
var forms = document.createElement('div')
var h2 = document.createElement('h2')
for(var i =0;i<5;i++){
    var  input=document.createElement('input')
    var placeholders =['first name','last name','age','contact number','email']
    input.placeholder = placeholders[i]
    inputs.push(input)
    forms.appendChild(inputs[i])

}
function registerClick(){
    var welcome = document.getElementsByClassName('welcome')[0]
    document.body.removeChild(welcome)
   
    h2.innerHTML = 'please fill in the form'
    forms.appendChild(h2)
    forms.classList.add('forms')
   
   
  
    forms.appendChild(submit)
  document.body.appendChild(forms)

}
var register = document.getElementById('register')
register.onclick = function(){
    registerClick()
}
var listContainer=document.createElement('div')
  var item  = document.createElement('div')
var students=[]
function handleSubmit(){
   document.body.removeChild(forms)
  
   for(var i = 0;i<inputs.length;i++){
    
    
   
       var p =  document.createElement('p')
       p.innerHTML = inputs[i].value
     
       item.appendChild(p)
    
    
   
    
    listContainer.appendChild(item)
    

   }
   var remover = document.createElement('button')
    remover.classList.add('remove')
    remover.textContent ='remove'
    item.appendChild(remover)
   students.push(item)
   item.classList.add('item')
   listContainer.classList.add('list-container')
   document.body.appendChild(listContainer)
console.log(students)

}


var add = document.createElement('button')
submit.addEventListener('click',function(){
    handleSubmit()
  
    add.classList.add('add-student-btn')
    add.textContent = 'add'
    document.body.appendChild(add)
})


add.addEventListener('click',function(){
    console.log('add,clicked')
    document.body.appendChild(forms)
    submit.onsubmit= function(){
        console.log(body.children)
        document.body.removeChild(forms)
        handleSubmit()
        console.log(students.length)
    }
})
