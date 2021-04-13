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