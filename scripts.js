function generateNumber(){

    const min = Math.ceil(document.querySelector('.quadro-um').value)

    const max = Math.floor(document.querySelector('.quadro-dois').value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min; 

    alert(result)
   
}
