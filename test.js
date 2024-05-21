console.log('My JS file is running.............')

var header = document.getElementById('header')

console.log(header)

console.log(header.innerText)


let classelem = document.getElementsByClassName('temp-para');

console.log(classelem)

console.log(classelem[0].innerText)


let tagelem = document.getElementsByTagName('p');
console.log(tagelem)

let queryelem1 = document.querySelector('#header')
let queryelem2 = document.querySelectorAll('.temp-para')


// innerText/innerHTML/textContent - ?????

document.getElementById('header').innerText = 'HashedBit'


// element/tag/attribute


console.log(document.getElementById('image-one').getAttribute('class'))

document.getElementById('image-one').setAttribute('class', 'abc')

document.getElementById('image-one').setAttribute('src', 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg')

document.getElementById('image-one').removeAttribute('style')