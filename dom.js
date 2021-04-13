console.log(document.domain)
document.title='ABC'
console.log(document.doctype)
console.log(document.body)

var headerTitle=document.getElementById('header-title')
headerTitle.innerText='Hello'

var header=document.getElementById('main-header')
header.style.border='solid 3px #000'

var addItem=document.getElementById('addItem')
addItem.style.color='green'
addItem.style.fontWeight='bold'

var items=document.getElementsByClassName('list-group-item')
console.log(items)
items[1].textContent='Hello 2'
items[1].style.fontWeight='bold'
items[1].style.backgroundColor='yellow'
items[2].textContent='Hello 3'
items[2].style.fontWeight='bold'
items[2].style.backgroundColor='green'

for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold'
}