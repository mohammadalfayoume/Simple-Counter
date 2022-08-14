'use strict'

// let counter=0

// let value=document.querySelector('.value')
// let btns=document.querySelectorAll('.btn')


// btns.forEach(function (btn) {
//     btn.addEventListener('click',function(e) {
//         const styles= e.currentTarget.classList
//         if (styles.contains('dec')){
//             counter--
//         }
//         else if (styles.contains('inc')){
//             counter++
//         }
//         else {
//             counter=0
//         }
//         value.textContent=counter
//         if (counter>0) {
//             value.style.color='green'
//         }
//         if (counter<0) {
//             value.style.color='red'
//         }
//         if (counter==0) {
//             value.style.color='#222'
//         }
//     })
    
// })

let count=0
let btns =document.querySelectorAll('.btn')
let value =document.querySelector('.value')

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', handle)

    function handle(event){
        const styles= event.currentTarget.classList
        event.preventDefault()
        if (styles.contains('dec')) {
            count--
        }
        else if (styles.contains('inc')) {
            count++
        }
        else {
            count=0
        }
        value.textContent=count  

        count>0 ? value.style.color='green' :
        count<0 ? value.style.color='red' : value.style.color='black'

    }

}