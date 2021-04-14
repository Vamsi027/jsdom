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

// var input=document.querySelector('input')
// input.value='Hello'

// var submit=document.querySelector('input[type=submit]')
// submit.value='Send'

// var item=document.querySelector('.list-group-item:nth-child(2)')
// item.style.backgroundColor='green'

// var item2=document.querySelector('.list-group-item:nth-child(3)')
// item2.style.display='none'

// //item3 is hidden at this pt but it is yellow as well
// var odd=document.querySelectorAll('li:nth-child(odd)')
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='yellow'
// }

// var item3=document.querySelectorAll('li:nth-child(2)')
// item3[0].style.color='blue'


// var itemList=document.querySelector('#items')
// itemList.parentElement.style.background='yellow'

// console.log(itemList.firstChild) //not useful with the current index.html

// itemList.firstElementChild.textContent='Hello 1'
// itemList.lastElementChild.textContent='Hello 5'

// console.log(itemList.nextSibling) //not useful with the current index.html
// console.log(itemList.nextElementSibling) //not useful with the current index.html

// console.log(itemList.previousSibling) //not useful with the current index.html
// itemList.previousElementSibling.style.color='green'

// var newDiv=document.createElement('div')
// newDiv.className='hello'
// newDiv.id='hello1'
// newDiv.setAttribute('title','Hello Div')
// var newDivtext=document.createTextNode('Hello World')
// newDiv.appendChild(newDivtext)

// var container=document.querySelector('header .container')
// var h1=document.querySelector('header h1')

// container.insertBefore(newDiv,h1)

// var container2=document.querySelector('.card-body')
// var l1=document.querySelector('#items')
// container2.insertBefore(newDiv,l1)

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');    

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', editItem);

function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;

  var li = document.createElement('li');
  
  li.className = 'list-group-item';
  
  li.appendChild(document.createTextNode(newItem));

  
  var deleteBtn = document.createElement('button');

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function editItem(e){
    if(e.target.classList.contains('edit')){
        var li = e.target.parentElement;
        li.contentEditable = "true";
      }
  }
