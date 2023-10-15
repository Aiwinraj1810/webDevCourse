function displayCalculation(){
    document.querySelector('.js-calculation').innerHTML= calculation;
}
let calculation ='';
localStorage.getItem(history)
function updateCalculation(value){
document.querySelector('.js-calculation').innerHTML= calculation = calculation + value;
console.log(calculation)



}