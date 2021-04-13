// console.log(document.domain)
// document.title='ABC'
// console.log(document.doctype)
// console.log(document.body)

// var headerTitle=document.getElementById('header-title')
// headerTitle.innerText='Hello'

// var header=document.getElementById('main-header')
// header.style.border='solid 3px #000'

// var addItem=document.getElementById('addItem')
// addItem.style.color='green'
// addItem.style.fontWeight='bold'

// var items=document.getElementsByClassName('list-group-item')
// console.log(items)
// items[1].textContent='Hello 2'
// items[1].style.fontWeight='bold'
// items[1].style.backgroundColor='yellow'
// items[2].textContent='Hello 3'
// items[2].style.fontWeight='bold'
// items[2].style.backgroundColor='green'

// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight='bold'
// }

// var diffItem=document.getElementsByClassName('not-in-list')
// console.log(diffItem)
// diffItem[0].textContent='Goodbye'
// diffItem[0].style.backgroundColor='grey'

// var diffItem1=document.getElementsByTagName('li')
// diffItem1[4].textContent='Goodbye'
// diffItem1[4].style.backgroundColor='yellow'

var input=document.querySelector('input')
input.value='Hello'

var submit=document.querySelector('input[type=submit]')
submit.value='Send'

var item=document.querySelector('.list-group-item:nth-child(2)')
item.style.backgroundColor='green'

var item2=document.querySelector('.list-group-item:nth-child(3)')
item2.style.display='none'

//item3 is hidden at this pt but it is yellow as well
var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='yellow'
}

var item3=document.querySelectorAll('li:nth-child(2)')
item3[0].style.color='blue'