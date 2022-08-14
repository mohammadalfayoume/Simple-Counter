'use strict'

let counter=0

let value=document.querySelector('.value')
let btns=document.querySelectorAll('.btn')


btns.forEach(function (btn) {
    btn.addEventListener('click',function(e) {
        const styles= e.currentTarget.classList
        if (styles.contains('dec')){
            counter--
        }
        else if (styles.contains('inc')){
            counter++
        }
        else {
            counter=0
        }
        value.textContent=counter
        if (counter>0) {
            value.style.color='green'
        }
        if (counter<0) {
            value.style.color='red'
        }
        if (counter==0) {
            value.style.color='#222'
        }
    })
    
})