// Pika-pika suerte!
let bgColors = document.querySelector("#colors")
bgColors.addEventListener('click', function (event) {

   document.querySelector("#picachu").style.backgroundColor = event.target.id
    
})