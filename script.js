const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener( 'click', () => {
        nav.classList.add('active');
    })
}


if(close) {
    close.addEventListener( 'click', () => {
        nav.classList.remove('active');
    })
}

 let next =document.querySelector('.next')
 let prev = document.querySelector(".prev")

 next.addEventListener('click',function(){
    let items =document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])

 })

 prev.addEventListener('click',function(){
    let items =document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])

 })